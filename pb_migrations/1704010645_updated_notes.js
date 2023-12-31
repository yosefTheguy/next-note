/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6k4tec0er21ngmh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ybiph7e0",
    "name": "content",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6k4tec0er21ngmh")

  // remove
  collection.schema.removeField("ybiph7e0")

  return dao.saveCollection(collection)
})
