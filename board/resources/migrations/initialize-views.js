{
    "views": {
        "dashboards-view": {
            "map": "function (doc) {\n  if (doc.type === 'dashboard') {\n      emit(doc.events.length);\n  }\n}"
    }
},
 "language": "javascript"
}
