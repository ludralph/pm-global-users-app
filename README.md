# pm-global-users-app

## Specification

API Endpoint: “https://pmglobal-users-app.herokuapp.com/users”

Authentication

- Username: test
- Password: pass1234

#### 1. Create a User

**Request**

Endpoint :   "/users" e.g. `http://test.com/users`

Method: `POST`

Data:

	{
		"firstname": "chibunna",
		"lastname": "oduonye",
		"gender": "M",
		"date_of_birth": "2015-04-08"
	}

**Response**

Code: `200`

Data:

	{
		"id": "1",
		"firstname": "chibunna",
		"lastname": "oduonye",
		"gender": "M",
		"date_of_birth": "2015-04-08",
		"date_created": "2014-07-17T03:03:34",
		"date_updated": "2014-07-17T03:03:34"
	}


#### 2. Select All Users

**Request**

Endpoint :   "/users" e.g. `http://test.com/users?filter_field=firstname&filter_value=chibunna`

Method: `GET`

Parameters (Optional): 

1. sort_field - this can be any field in the JSON e.g. "firstname",
2. sort_order_mode - this can be either "asc" or "desc"
3. filter_field - this can be any field in the JSON e.g. "firstname",
4. filter_value - the criteria upon which the response data will be filtered 
5. page : The current page. Default is 1
6. page_size: The number of records per page. Default is 25

**Response**

Code: `200`

Data:

	[
    		{
			"id": "1",
				"firstname": "chibunna",
				"lastname": "oduonye",
				"gender": "M",
				"date_of_birth": "1990-04-08",
				"date_created": "2014-07-17T03:03:34",
				"date_updated": "2014-07-17T03:03:34"
    		},
    		{
			"id": "2",
				"firstname": "Godwin",
				"lastname": "Orubebe",
				"gender": "M",
				"date_of_birth": "1965-04-08",
				"date_created": "2014-07-17T04:12:25",
				"date_updated": "2014-07-17T04:12:25"
    		}
]

#### 3. Select User By ID

**Request**

Endpoint :   "/users/{id}" e.g. `http://test.com/users/1`

Method: `GET`	

**Response**:

Code: `200`

Data:

      {
		"id": "1",
	       	"firstname": "chibunna",
		"lastname": "oduonye",
		"gender": "M",
		"date_of_birth": "2015-04-08",
		"date_created": "2014-07-17T03:03:34",
	"date_updated": "2014-07-17T03:03:34"
	}

#### 4. Edit User	

**Request**

Method: `PUT`

Endpoint: "users/{id}" e.g. `http://test.com/users/1`

Payload: 

 	{
		"id": "2"
		"firstname": "Godwin",
		"lastname": "Jega",
		"gender": "M",
		"date_of_birth": "2015-04-08"
	}

**Response**

Code: `200`

Data:

	{
		"id": "2"
		"firstname": "Godwin",
		"lastname": "Jega",
		"gender": "M",
		"date_of_birth": "2015-04-08",
		"date_created": "2014-07-17T04:12:25",
		"date_updated": "2014-07-17T18:44:19"
	}

#### 5. Delete User

**Request**

Method: `DELETE`

Endpoint: "users/{id}" e.g http://test.com/1

**Response**

Code: `200`

Data: <empty>
