# GetirAssignment setup on local

Step-1: Clone the repository to local system

Step-2: cd inside the GetirAssignment Folder: cd GetirAssignment

Step-3: Run:  npm install

Step-4: Run: node ./bin/www

Step-5: For Test case run:  npm test

Step-6: Install Postman 

Step-7: Select POST request from dropdown and put http://127.0.0.1:3000/getir in URL

Step-8: Put required request on body 
         eg: {
             "startDate": "2016-01-29",
             "endDate": "2017-01-28",
             "minCount": 1000,
             "maxCount": 1500
             }
