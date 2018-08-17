ssh -NL /tmp/docker.sock:/var/run/docker.sock root@pillowboard.io &

sleep 3

sudo docker -H localhost:2374 network create --driver overlay traefik-net

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
    --traefik.frontend.rule=Host:traefik.pillowboard.io \
    --traefik.port=8080 \
    --traefik.docker.network=traefik-net \
    --docker.watch \
    --api

sudo killall ssh && rm /tmp/docker.sock
