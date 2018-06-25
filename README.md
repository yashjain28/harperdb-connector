# ipm package: harperdb-connector

## Overview

HarperDB is a database that optimizes the data value chain for any size company without sacrificing features, functionality and stability.  HarperDB is designed with a small footprint that enables an enterprise class database to run on the edge and scale to servers in the cloud.  HarperDB was founded in Denver, CO with the belief that database architecture can be simple and accessible to everyone. 

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

_Add any setup instructions_
_Ex:  API Keys, or a setup Code Service to run, library constants to set_

## Usage

_Include example code for the entry point for your package, and any other instructions on how it should be used_

## Assets

###

- `HarperDBExample` - TODO desc

### Libraries

- `HarperDB` - TODO Add desc
- `HarperDBConfiguration` - TODO Add desc

## API

_Recommend using JSDoc for documenting your JavaScript code, and using jsdoc2md npm tool (https://www.npmjs.com/package/jsdoc-to-markdown) to generate markdown_

```
npm install -g jsdoc-to-markdown
jsdoc2md code/*/*/*.js >> Readme.md
```
## Classes

<dl>
<dt><a href="#HarperDB">HarperDB</a></dt>
<dd></dd>
<dt><a href="#HarperDBInitialization">HarperDBInitialization</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#HarperDBCSVDataLoad">HarperDBCSVDataLoad(body)</a> ⇒ <code>Object</code></dt>
<dd><p>Deletes data by hash (primary key) in HarperDB</p>
</dd>
<dt><a href="#CreateSchema">CreateSchema(body)</a> ⇒ <code>Object</code></dt>
<dd><p>Creates a new schema in HarperDB</p>
</dd>
<dt><a href="#HarperDBCreateTable">HarperDBCreateTable(body)</a> ⇒ <code>Object</code></dt>
<dd><p>Creates a new table in an existing schema in HarperDB</p>
</dd>
<dt><a href="#HarperDBDelete">HarperDBDelete(body)</a> ⇒ <code>Object</code></dt>
<dd><p>Deletes data by hash (primary key) in HarperDB</p>
</dd>
<dt><a href="#HarperDBDescribeAll">HarperDBDescribeAll()</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Updates JSON data in an existing schema in HarperDB</p>
</dd>
<dt><a href="#HarperDBDescribeSchema">HarperDBDescribeSchema()</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Updates JSON data in an existing schema in HarperDB</p>
<ul>
<li>@param {Object} body</li>
</ul>
</dd>
<dt><a href="#HarperDBInsert">HarperDBInsert(body)</a> ⇒ <code>Object</code></dt>
<dd><p>Inserts JSON data into an existing schema in HarperDB</p>
</dd>
<dt><a href="#HarperDBSQL">HarperDBSQL(body)</a> ⇒ <code>Object</code> | <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Returns an object array based on a search by hash (primary key)</p>
</dd>
<dt><a href="#HarperDBSearchByHash">HarperDBSearchByHash(body)</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Returns an object array based on a search by hash (primary key)</p>
</dd>
<dt><a href="#HarperDBSearchByValue">HarperDBSearchByValue(body)</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Returns an object array based on a search by hash (primary key)</p>
</dd>
<dt><a href="#HarperDBUpdate">HarperDBUpdate(body)</a> ⇒ <code>Object</code></dt>
<dd><p>Updates JSON data in an existing schema in HarperDB</p>
</dd>
</dl>

<a name="HarperDB"></a>

## HarperDB
**Kind**: global class  

* [HarperDB](#HarperDB)
    * [new HarperDB(username, password, end_point)](#new_HarperDB_new)
    * [~createSchema(schema, callback)](#HarperDB..createSchema) ⇒ <code>Object</code>
    * [~createTable(schema, table, callback)](#HarperDB..createTable) ⇒ <code>Object</code>
    * [~insert(schema, table, records, callback)](#HarperDB..insert) ⇒ <code>Object</code>
    * [~update(schema, table, records, callback)](#HarperDB..update) ⇒ <code>Object</code>
    * [~deleter(schema, table, ids, callback)](#HarperDB..deleter) ⇒ <code>Object</code>
    * [~searchByHash(schema, table, ids, get_attributes, callback)](#HarperDB..searchByHash) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~searchByValue(schema, table, search_attribute, search_value, get_attributes, callback)](#HarperDB..searchByValue) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~sql(sql, callback)](#HarperDB..sql) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~describeAll(callback)](#HarperDB..describeAll) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~describeSchema(callback)](#HarperDB..describeSchema) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~csvDataLoad(schema, table, data, callback)](#HarperDB..csvDataLoad) ⇒ <code>Object</code>
    * [~executeOperation(json, callback)](#HarperDB..executeOperation) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>
    * [~executeRequest(body, callback)](#HarperDB..executeRequest) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>

<a name="new_HarperDB_new"></a>

### new HarperDB(username, password, end_point)
HarperDB library for interating with HarperDB


| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Username used to authenticate against HarperDB |
| password | <code>string</code> | Password used to authenticate against HarperDB |
| end_point | <code>string</code> | Endpoint used to connect to an instance of HarperDB i.e. http://127.0.0.1:9925 |

<a name="HarperDB..createSchema"></a>

### HarperDB~createSchema(schema, callback) ⇒ <code>Object</code>
Create a schema

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Name of new schema to create |
| callback |  |  |

**Example**  
```js
{
     "message": "schema dev successfully created"
}
```
<a name="HarperDB..createTable"></a>

### HarperDB~createTable(schema, table, callback) ⇒ <code>Object</code>
Create a table

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Name of schema which the table will be added to |
| table | <code>string</code> | Name of the new Table to create |
| callback |  |  |

**Example**  
```js
{
 "message": "table dev.dog successfully created."
 }
```
<a name="HarperDB..insert"></a>

### HarperDB~insert(schema, table, records, callback) ⇒ <code>Object</code>
Insert record(s)

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table where data will be inserted |
| records | <code>Array.&lt;Object&gt;</code> | Object array of records |
| callback |  |  |

**Example**  
```js
[
     {
       "name":"Harper",
       "breed":"Mutt",
       "id":"1",
       "age":5

     },
     {
       "name":"Penny",
       "breed":"Mutt",
       "id":"3",
       "age":5

     }
     ]
```
**Example**  
```js
{
 "message": "successfully wrote 2 records"
 }
```
<a name="HarperDB..update"></a>

### HarperDB~update(schema, table, records, callback) ⇒ <code>Object</code>
Update record(s)

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table where data will be updated |
| records | <code>Array.&lt;Object&gt;</code> | Object array of records |
| callback |  |  |

**Example**  
```js
[
         {
           "id": 1,
           "weight_lbs": 55
         },
         {
         "id": 3,
         "owner": "kyle b",
         "weight_lbs": 35
       }
     ]
```
**Example**  
```js
{
          "message": "updated 2 of 2 records",
          "update_hashes": [
            1,
            3
          ],
          "skipped_hashes": []
        }
```
<a name="HarperDB..deleter"></a>

### HarperDB~deleter(schema, table, ids, callback) ⇒ <code>Object</code>
Delete record(s)

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table where data will be deleted |
| ids | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;number&gt;</code> | Array of hash values (primary keys) that will be deleted |
| callback |  |  |

**Example**  
```js
{
          "message": "records successfully deleted"
        }
```
<a name="HarperDB..searchByHash"></a>

### HarperDB~searchByHash(schema, table, ids, get_attributes, callback) ⇒ <code>Array.&lt;Object&gt;</code>
Search for records based on hash (primary key)

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table where the data will be queried |
| ids | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;number&gt;</code> | Array of hash values (primary key values) that will be deleted |
| get_attributes | <code>Array.&lt;string&gt;</code> | (optional) String array of attribute names that will be returned in the results |
| callback |  |  |

**Example**  
```js
[
     {
       "age": 5,
       "breed": "Mutt",
       "id": 1,
       "name": "Harper",
       "weight_lbs": 55
     },
     {
       "age": 5,
       "breed": "Mutt",
       "id": 3,
       "name": "Penny",
       "owner": "kyle b",
       "weight_lbs": 35
     }
     ]
```
<a name="HarperDB..searchByValue"></a>

### HarperDB~searchByValue(schema, table, search_attribute, search_value, get_attributes, callback) ⇒ <code>Array.&lt;Object&gt;</code>
Search by value on an attribute

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table where the data will be queried |
| search_attribute | <code>string</code> | Attribute upon which to perform the search |
| search_value | <code>string</code> | Value that will be used in the search |
| get_attributes | <code>Array.&lt;string&gt;</code> | (optional) String array of attribute names that will be returned in the results |
| callback |  |  |

**Example**  
```js
[
     {
       "age": 5,
       "breed": "Mutt",
       "id": 1,
       "name": "Harper",
       "weight_lbs": 55
     },
     {
       "age": 5,
       "breed": "Mutt",
       "id": 3,
       "name": "Penny",
       "owner": "kyle b",
       "weight_lbs": 35
     }
     ]
```
<a name="HarperDB..sql"></a>

### HarperDB~sql(sql, callback) ⇒ <code>Array.&lt;Object&gt;</code>
Run SQL (INSERT / UPDATE / DELETE / SELECT)

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| sql | <code>string</code> | SQL Statement to execute |
| callback |  |  |

**Example**  
```js
[
     {
       "age": 5,
       "breed": "Mutt",
       "id": 1,
       "name": "Harper",
       "weight_lbs": 55
     },
     {
       "age": 5,
       "breed": "Mutt",
       "id": 3,
       "name": "Penny",
       "owner": "kyle b",
       "weight_lbs": 35
     }
     ]
```
<a name="HarperDB..describeAll"></a>

### HarperDB~describeAll(callback) ⇒ <code>Array.&lt;Object&gt;</code>
Returns the schema/table/attribute meta data for all schemas

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param |
| --- |
| callback | 

**Example**  
```js
[
     {
       "schema": "dev",
       "name": "breed",
       "hash_attribute": "id",
       "id": "4d560884-0f57-4756-a564-eea76f64d0af",
       "attributes": [
         {
           "attribute": "section"
         },
         {
           "attribute": "field6"
         },
         {
           "attribute": "country"
         },
         {
           "attribute": "name"
         },
         {
           "attribute": "id"
         },
         {
           "attribute": "image"
         }
       ]
     },
     {
       "schema": "dev",
       "name": "dog",
       "id": "125ab5c9-f8ac-4197-a348-dd716b0f11ed",
       "hash_attribute": "id",
       "attributes": [
         {
           "attribute": "adorable"
         },
         {
           "attribute": "weight_lbs"
         },
         {
           "attribute": "owner_name"
         },
         {
           "attribute": "doc"
         },
         {
           "attribute": "id"
         },
         {
           "attribute": "dog_name"
         },
         {
           "attribute": "age"
         },
         {
           "attribute": "breed_id"
         }
       ]
     }
     ]
```
<a name="HarperDB..describeSchema"></a>

### HarperDB~describeSchema(callback) ⇒ <code>Array.&lt;Object&gt;</code>
Returns the schema/table/attribute meta data for a schema

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param |
| --- |
| callback | 

**Example**  
```js
[
     {
       "schema": "dev",
       "name": "breed",
       "hash_attribute": "id",
       "id": "4d560884-0f57-4756-a564-eea76f64d0af",
       "attributes": [
         {
           "attribute": "section"
         },
         {
           "attribute": "field6"
         },
         {
           "attribute": "country"
         },
         {
           "attribute": "name"
         },
         {
           "attribute": "id"
         },
         {
           "attribute": "image"
         }
       ]
     },
     {
       "schema": "dev",
       "name": "dog",
       "id": "125ab5c9-f8ac-4197-a348-dd716b0f11ed",
       "hash_attribute": "id",
       "attributes": [
         {
           "attribute": "adorable"
         },
         {
           "attribute": "weight_lbs"
         },
         {
           "attribute": "owner_name"
         },
         {
           "attribute": "doc"
         },
         {
           "attribute": "id"
         },
         {
           "attribute": "dog_name"
         },
         {
           "attribute": "age"
         },
         {
           "attribute": "breed_id"
         }
       ]
     }
     ]
```
<a name="HarperDB..csvDataLoad"></a>

### HarperDB~csvDataLoad(schema, table, data, callback) ⇒ <code>Object</code>
loads csv data into a table

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table the csv data is loading into |
| data | <code>string</code> | CSV formatted |
| callback |  |  |

**Example**  
```js
{
        "message": "successfully loaded 3 records"
        }
```
<a name="HarperDB..executeOperation"></a>

### HarperDB~executeOperation(json, callback) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>
Execute a raw HarperDB call

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type |
| --- | --- |
| json | <code>Object</code> | 
| callback |  | 

**Example**  
```js
{
        "operation":"insert",
        "schema":"dev",
        "table":"dog",
        "records": [
          {
            "name":"Harper",
            "breed":"Mutt",
            "id":"1",
            "age":5

          },
          {
            "name":"Penny",
            "breed":"Mutt",
            "id":"3",
            "age":5
          }
        ]
        }
```
<a name="HarperDB..executeRequest"></a>

### HarperDB~executeRequest(body, callback) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>
Perform the request to HarperDB

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 
| callback |  | 

<a name="HarperDBInitialization"></a>

## HarperDBInitialization
**Kind**: global class  
<a name="new_HarperDBInitialization_new"></a>

### new HarperDBInitialization()
Initializes the HarperDB Connector with end_point, username & password.  Returns the accessor functions to interact with HarperDB

<a name="HarperDBCSVDataLoad"></a>

## HarperDBCSVDataLoad(body) ⇒ <code>Object</code>
Deletes data by hash (primary key) in HarperDB

**Kind**: global function  

| Param | Type |
| --- | --- |
| body | <code>string</code> | 

**Example**  
```js
req.params.body = {
  "schema":"dev",
  "table":"breed",
  "data":"id,name,section,country,image\n1,ENGLISH POINTER,British and Irish Pointers and Setters,GREAT BRITAIN,http://www.fci.be/Nomenclature/Illustrations/001g07.jpg\n2,ENGLISH SETTER,British and Irish Pointers and Setters,GREAT BRITAIN,http://www.fci.be/Nomenclature/Illustrations/002g07.jpg\n3,KERRY BLUE TERRIER,Large and medium sized Terriers,IRELAND,\n"
};

 
```
**Example**  
```js
{
    "message": "successfully loaded 3 records"
 }
```
<a name="CreateSchema"></a>

## CreateSchema(body) ⇒ <code>Object</code>
Creates a new schema in HarperDB

**Kind**: global function  
**Returns**: <code>Object</code> - {
    "message": "schema dev successfully created"
    }  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

**Example**  
```js
req.params.body = {
     "schema":"dev"
 };

 
```
<a name="HarperDBCreateTable"></a>

## HarperDBCreateTable(body) ⇒ <code>Object</code>
Creates a new table in an existing schema in HarperDB

**Kind**: global function  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

**Example**  
```js
req.params.body = {
     "schema":"dev",
     "table":"dog"
 };

 
```
**Example**  
```js
{
 "message": "table dev.dog successfully created."
 }
```
<a name="HarperDBDelete"></a>

## HarperDBDelete(body) ⇒ <code>Object</code>
Deletes data by hash (primary key) in HarperDB

**Kind**: global function  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

**Example**  
```js
req.params.body = {
     "schema":"dev",
     "table":"dog",
     "hash_values":[ 5,8]
 };

 
```
**Example**  
```js
{
        "message": "records successfully deleted"
    }
```
<a name="HarperDBDescribeAll"></a>

## HarperDBDescribeAll() ⇒ <code>Array.&lt;Object&gt;</code>
Updates JSON data in an existing schema in HarperDB

**Kind**: global function  
**Example**  
```js
[
 {
   "schema": "dev",
   "name": "breed",
   "hash_attribute": "id",
   "id": "4d560884-0f57-4756-a564-eea76f64d0af",
   "attributes": [
     {
       "attribute": "section"
     },
     {
       "attribute": "field6"
     },
     {
       "attribute": "country"
     },
     {
       "attribute": "name"
     },
     {
       "attribute": "id"
     },
     {
       "attribute": "image"
     }
   ]
 },
 {
   "schema": "dev",
   "name": "dog",
   "id": "125ab5c9-f8ac-4197-a348-dd716b0f11ed",
   "hash_attribute": "id",
   "attributes": [
     {
       "attribute": "adorable"
     },
     {
       "attribute": "weight_lbs"
     },
     {
       "attribute": "owner_name"
     },
     {
       "attribute": "doc"
     },
     {
       "attribute": "id"
     },
     {
       "attribute": "dog_name"
     },
     {
       "attribute": "age"
     },
     {
       "attribute": "breed_id"
     }
   ]
 }
 ]
```
<a name="HarperDBDescribeSchema"></a>

## HarperDBDescribeSchema() ⇒ <code>Array.&lt;Object&gt;</code>
Updates JSON data in an existing schema in HarperDB
* @param {Object} body

**Kind**: global function  
**Example**  
```js
req.params.body = {
     "schema":"dev"
 };

 
```
**Example**  
```js
[
 {
   "schema": "dev",
   "name": "breed",
   "hash_attribute": "id",
   "id": "4d560884-0f57-4756-a564-eea76f64d0af",
   "attributes": [
     {
       "attribute": "section"
     },
     {
       "attribute": "field6"
     },
     {
       "attribute": "country"
     },
     {
       "attribute": "name"
     },
     {
       "attribute": "id"
     },
     {
       "attribute": "image"
     }
   ]
 },
 {
   "schema": "dev",
   "name": "dog",
   "id": "125ab5c9-f8ac-4197-a348-dd716b0f11ed",
   "hash_attribute": "id",
   "attributes": [
     {
       "attribute": "adorable"
     },
     {
       "attribute": "weight_lbs"
     },
     {
       "attribute": "owner_name"
     },
     {
       "attribute": "doc"
     },
     {
       "attribute": "id"
     },
     {
       "attribute": "dog_name"
     },
     {
       "attribute": "age"
     },
     {
       "attribute": "breed_id"
     }
   ]
 }
 ]
```
<a name="HarperDBInsert"></a>

## HarperDBInsert(body) ⇒ <code>Object</code>
Inserts JSON data into an existing schema in HarperDB

**Kind**: global function  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

**Example**  
```js
req.params.body = {
     "schema":"dev",
     "table":"dog",
     "records":[
     {
        "id" : 1,
        "dog_name" : "Penny",
        "owner_name": "Kyle",
        "breed_id":154,
        "age":5,
        "weight_lbs":35,
        "adorable":true
      },
      {
        "id" : 2,
        "dog_name" : "Harper",
        "owner_name": "Stephen",
        "breed_id":346,
        "age":5,
        "weight_lbs":55,
        "adorable":true
      },
      {
        "id" : 3,
        "dog_name" : "Alby",
        "owner_name": "Kaylan",
        "breed_id":348,
        "age":5,
        "weight_lbs":84,
        "adorable":true
      },
      {
        "id" : 4,
        "dog_name" : "Billy",
        "owner_name": "Zach",
        "breed_id":347,
        "age":4,
        "weight_lbs":60,
        "adorable":true
      },
      {
        "id" : 5,
        "dog_name" : "Rose Merry",
        "owner_name": "Zach",
        "breed_id":348,
        "age":6,
        "weight_lbs":15,
        "adorable":true
      },
      {
        "id" : 6,
        "dog_name" : "Kato",
        "owner_name": "Kyle",
        "breed_id":351,
        "age":4,
        "weight_lbs":28,
        "adorable":true
      },
      {
        "id" : 7,
        "dog_name" : "Simon",
        "owner_name": "Fred",
        "breed_id":349,
        "age":1,
        "weight_lbs":35,
        "adorable":true
      },
      {
        "id" : 8,
        "dog_name" : "Gemma",
        "owner_name": "Stephen",
        "breed_id":350,
        "age":3,
        "weight_lbs":55,
        "adorable":true
      },
      {
        "id" : 9,
        "dog_name" : "Gertrude",
        "owner_name": "Eli",
        "breed_id":158,
        "age":5,
        "weight_lbs":70,
        "adorable":true
      },
      {
        "id" : 10,
        "dog_name" : "Big Louie",
        "owner_name": "Eli",
        "breed_id":241,
        "age":11,
        "weight_lbs":20,
        "adorable":false
      }
     ]
 };

 
```
**Example**  
```js
{
  "message": "inserted 10 of 10 records",
  "update_hashes": [
    1,2,3,4,5,6,7,8,9,10
  ],
  "skipped_hashes": []
}
```
<a name="HarperDBSQL"></a>

## HarperDBSQL(body) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>
Returns an object array based on a search by hash (primary key)

**Kind**: global function  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

**Example**  
```js
req.params.body = {
     "sql":"SELECT * FROM dev.dog"
 };

 req.params.body = {
     "sql":"SELECT COUNT(id), owner_name FROM dev.dog GROUP BY owner_name"
 };

req.params.body = {
     "sql":"INSERT INTO dev.dog (id, name) VALUES(22, 'Simon')"
 };

 req.params.body = {
     "sql":"DELETE FROM dev.dog WHERE id = 22"
 };

 
```
<a name="HarperDBSearchByHash"></a>

## HarperDBSearchByHash(body) ⇒ <code>Array.&lt;Object&gt;</code>
Returns an object array based on a search by hash (primary key)

**Kind**: global function  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

**Example**  
```js
req.params.body = {
     "schema":"dev",
     "table":"dog",
     "hash_values":[1,3],
     "attributes":["*"]
 };

 
```
**Example**  
```js
[
     {
        "id" : 1,
        "dog_name" : "Penny",
        "owner_name": "Kyle",
        "breed_id":154,
        "age":5,
        "weight_lbs":35,
        "adorable":true
      },
 {
     "id" : 3,
     "dog_name" : "Alby",
     "owner_name": "Kaylan",
     "breed_id":348,
     "age":5,
     "weight_lbs":84,
     "adorable":true
   }
 ]
```
<a name="HarperDBSearchByValue"></a>

## HarperDBSearchByValue(body) ⇒ <code>Array.&lt;Object&gt;</code>
Returns an object array based on a search by hash (primary key)

**Kind**: global function  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

**Example**  
```js
req.params.body = {
     "schema":"dev",
     "table":"dog",
     "search_attribute":"dog_name",
     "search_value":"Penny",
     "attributes":["*"]
 };

 
```
**Example**  
```js
[
     {
        "id" : 1,
        "dog_name" : "Penny",
        "owner_name": "Kyle",
        "breed_id":154,
        "age":5,
        "weight_lbs":35,
        "adorable":true
      }
 ]
```
<a name="HarperDBUpdate"></a>

## HarperDBUpdate(body) ⇒ <code>Object</code>
Updates JSON data in an existing schema in HarperDB

**Kind**: global function  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

**Example**  
```js
req.params.body = {
     "schema":"dev",
     "table":"dog",
     "records":[
     {
        "id" : 1,
        "dog_name" : "Penny Bernhardy",
        "age":6
      }
     ]
 };

 
```
**Example**  
```js
{
  "message": "updated 1 of 1 records",
  "update_hashes": [
    1
  ],
  "skipped_hashes": []
}
```
