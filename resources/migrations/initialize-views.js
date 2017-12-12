{"views": {
    "dashboards-view": {
      "map": "function (doc) {\n  if (doc.type === 'dashboard' && doc[\"user-id\"]) {\n      emit(doc[\"user-id\"], doc.name);\n  }\n}"
    },
    "users-view": {
      "map": "function (doc) {\n  if (doc.type === 'user') {\n      emit(doc._id, null);\n  }\n}"
    },
    "sessions-view": {
      "map": "function (doc) {\n  if (doc.type === 'sessions') {\n      emit(doc.user_id, null);\n  }\n}"
    },
    "users-email-view": {
      "map": "function (doc) {\n  if (doc.type === 'user') {\n      emit(doc.email, null);\n  }\n}"
    }
  },
 "language": "javascript"}
