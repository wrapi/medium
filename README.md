# Medium API Wrapper 

Client interface for accessing [Medium API](https://github.com/Medium/medium-api-docs).

## Usage
Create a client object to connect to Medium API endpoints.

```JS
var mediumWrapi = require('medium-wrapi');

var client = new mediumWrapi("v1", API_BEARER_TOKEN));

// Now you are ready to make API calls to medium.
```

Provide parameters and a callback. 

API calls follow this syntax:

`client.action(param1, ..., callback);`

* `param` - (*as required*) url parameters - eg: For [publications](https://github.com/Medium/medium-api-docs#listing-the-users-publications) the value for `{{userId}} `.

### Examples

#### Getting the authenticated user's details
```JS
client.user(function(err, data) {
  if (!err) {
    console.log(data);
  }	
});
```

#### Listing the user's publications
```JS
client.publications("5303d74c64f66366f00cb9b2a94f3251bf5", 
  function(err, data) {
    if (!err) {
      console.log(data);
    }	
  }
);
```

#### Fetching contributors for a publication
```JS
client.contributors("b45573563f5a", function(err, data) {
  if (!err) {
    console.log(data);
  }	
});
```

#### Creating a post
```JS
client.posts("5303d74c64f66366f00cb9b2a94f3251bf5",
  {
    "title": "Liverpool FC",
    "contentFormat": "html",
    "content": "<h1>Liverpool FC</h1><p>You’ll never walk alone.</p>",
    "canonicalUrl": "http://jamietalbot.com/posts/liverpool-fc",
    "tags": ["football", "sport", "Liverpool"],
    "publishStatus": "public"
  },
	function(err, data) {
	  if (!err) {
	    console.log(data);
	  }	
	}
);
```

#### Creating a post under a publication
```JS
client.publication.post("b45573563f5a",
  {
    "title": "Hard things in software development",
    "contentFormat": "html",
    "content": "<p>Cache invalidation</p><p>Naming things</p>",
    "tags": ["development", "design"],
    "publishStatus": "draft"
  },
  function(err, data) {
    if (!err) {
      console.log(data);
    } 
  }
);
```

#### Uploading an image
```JS
client.images(
  {
    formData: {
      custom_file: {
        value:  fs.createReadStream('/path/to/myimage.png'),
        options: {
          filename: 'lenticular.png',
          contentType: 'image/png'
        }
      }
    }
  }, 
  function(err, data) {
    if (!err) {
      console.log(data);
    } 
  }
);
```


## API Functions

### Users
* [user](https://github.com/Medium/medium-api-docs#getting-the-authenticated-users-details)

### Publications
* [publications](https://github.com/Medium/medium-api-docs#listing-the-users-publications)
* [contributors](https://github.com/Medium/medium-api-docs#fetching-contributors-for-a-publication)

### Posts
* [post](https://github.com/Medium/medium-api-docs#creating-a-post)
* [publication.post](https://github.com/Medium/medium-api-docs#creating-a-post-under-a-publication)

### Images
* [images](https://github.com/Medium/medium-api-docs#uploading-an-image)

## License

  [MIT](LICENSE)


