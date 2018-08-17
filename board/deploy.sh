docker login -u $DOCKER_USER -p $DOCKER_PASS

ssh -NL localhost:2374:/var/run/docker.sock root@pillowboard.io &

sudo docker -H localhost:2374 network create --driver overlay traefik-net

 sudo docker -H localhost:2374 service create \
    --name dashboard \
    --with-registry-auth \
    --label traefik.port=3000 \
    --label traefik.enable=true \
    --network traefik-net \
    --label traefik.default.protocol=http \
    --label traefik.frontend.rule=Host:pillowboard.io,www.pillowboard.io,board.erben.io \
    --env DATABASE_URL=$DATABASE_URL \
    --env ENV=production \
    jerben/dashboard:0.4.11

 sudo docker -H localhost:2374 service create \
    --name dashboard-staging \
    --with-registry-auth \
    --label traefik.port=3000 \
    --label traefik.enable=true \
    --network traefik-net \
    --label traefik.default.protocol=http \
    --label traefik.frontend.rule=Host:test.pillowboard.io \
    --env DATABASE_URL=$DATABASE_URL \
    --env ENV=staging \
    jerben/dashboard:latest

 sudo docker -H localhost:2374 service create \
    --name traefik \
    --constraint=node.role==manager \
    --publish 80:80 --publish 8080:8080 --publish 443:443 \
    --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock \
    --network traefik-net \
    traefik \
    --logLevel=DEBUG \
    --entrypoints="Name:http Address::80 Redirect.EntryPoint:https" \
    --entrypoints="Name:https Address::443 TLS" \
    --defaultentrypoints=http,https \
    --acme \
    --acme.storage=acme.json \
    --acme.entryPoint=https \
    --acme.httpChallenge.entryPoint=http \
    --acme.onHostRule=true \
    --acme.onDemand=false \
    --acme.email=josef@pillowboard.io \
    --docker \
    --docker.swarmMode \
    --docker.domain=pillowboard.io \
    --docker.watch \
    --api

sudo killall ssh
