<p align="center">
  <a href="http://db.ncdd.gov.kh/gazetteer/view/index.castle" target="blank"><img src="http://db.ncdd.gov.kh/gazetteer/static/images/national.jpg" width="320" alt="Nest Logo" /></a>
</p>

  
## Description
In this source code, there's a sample [result.sql] that list Cambodia's gazetter as of 20200623 already.
But if you need a more update, 
1. Please go to this 
  [Datasource](https://raw.githubusercontent.com/RathanakSreang/cambodia-gazetteer/master/cambodia_gazetteer.json)
2. Copy it's content and replace the jsonData in ```app.service.ts>bulkInsert()```
3. Create a MySQL database named ```masterlist``` in your local Mamp, Xampp, or whatever. Just don't forget to update the database connection in ```app.module.ts```
4. Run 
```bash
$ npm install
```
5. In Postman, POST this: ```localhost:3000/app/bulkInsert```, and you'll get the tables with updated data in your masterlist database. 