# cache-redis-config
======================

## Description
---------------

cache-redis-config is a lightweight library designed to simplify the configuration and management of Redis cache for various applications and services. This project aims to provide a robust and extensible framework for handling Redis connections, setting cache expiration policies, and executing cache-related tasks.

## Features
------------

*   **Redis Connection Management**: cache-redis-config provides a simple and efficient way to establish and manage Redis connections.
*   **Cache Expiration Policies**: Configure and enforce cache expiration policies to ensure data freshness and optimize cache performance.
*   **Cache Operations**: Execute various cache-related tasks, including cache set, cache get, cache delete, and cache flush.
*   **Configuration Options**: Support for customizing cache behavior through configuration options, such as cache timeout, connection timeouts, and error handling.
*   **Extensibility**: cache-redis-config is designed to be extensible, allowing for easy integration with other libraries and frameworks.

## Technologies Used
----------------------

*   **Node.js**: cache-redis-config is built using Node.js and leverages its asynchronous I/O capabilities for efficient Redis cache operations.
*   **redis**: The library uses the official Redis client for Node.js to interact with Redis databases.
*   **dotenv**: cache-redis-config supports loading configuration settings from environment variables, making it easy to manage sensitive information like Redis connection strings.

## Installation
--------------

To install cache-redis-config, run the following command in your terminal:

```bash
npm install cache-redis-config
```

## Usage
---------

### Importing the Library

```javascript
const { RedisConfig } = require('cache-redis-config');
```

### Initializing Redis Configuration

```javascript
const redisConfig = new RedisConfig({
  host: 'localhost',
  port: 6379,
  password: 'your-password',
  timeout: 5000
});
```

### Setting Cache Expiration Policy

```javascript
redisConfig.setExpirationPolicy('ttl', 60 * 60); // Set cache expiration to 1 hour
```

### Executing Cache Operations

```javascript
redisConfig.set('cache-key', 'cache-value');
redisConfig.get('cache-key');
redisConfig.delete('cache-key');
redisConfig.flush();
```

## Contributing
--------------

Contributions to cache-redis-config are welcome and encouraged. Please fork the repository, make your changes, and submit a pull request. We follow standard professional guidelines for code review and testing.

## License
---------

cache-redis-config is released under the MIT License.

## Changelog
------------

*   **v1.0.0**: Initial release of cache-redis-config with basic Redis connection management and cache operations.
*   **v1.1.0**: Added support for cache expiration policies and custom configuration options.
*   **v2.0.0**: Overhauled the library to improve performance, extensibility, and error handling.