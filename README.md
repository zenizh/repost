# Repost

[![CircleCI](https://circleci.com/gh/kami-zh/repost.svg?style=svg)](https://circleci.com/gh/kami-zh/repost)
[![Gitter](https://badges.gitter.im/repostapp/Lobby.svg)](https://gitter.im/repostapp/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Repost is an open source software to communicate with your team members through posting daily reports.
This project focuses on a good user interface using Redux and React.
Ruby on Rails is used for the backend server.

**NOTICE**
Repost is still under development.
So it may occur breaking changes, and **it's too insecure to use** this.

## Screenshot

![](docs/screenshot_01.png)

## Build with

Repost is build with following libraries.
This project is still pre-alpha, so it adopts latest version of each.

- Ruby
- Ruby on Rails
- Redux
- React
- PostgreSQL
- draft.js

## Development

To develop Repost, you should run servers of Ruby on Rails and Webpack.
`db:populate` fills your database with example data.

```
$ git clone git@github.com:kami-zh/repost.git
$ cd repost
$ bin/setup
$ bin/rails db:populate # If needed
$ bin/rails s
$ bin/webpack-dev-server
```

To update the application you just run `bin/update`.

## Deployment

To start Repost on production, you should compile webpacker before running server of Ruby on Rails.

```
$ bundle install --without development test
$ bin/yarn install --production
$ RAILS_ENV=production bundle exec rails webpacker:compile
$ RAILS_ENV=production bundle exec rails db:create db:migrate db:seed_fu
$ bundle exec unicorn -c config/unicorn.rb -E production
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/kami-zh/repost.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
