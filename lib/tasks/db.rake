namespace :db do
  desc 'Fill with sample data'
  task populate: :environment do
    User.create(email: 'user@example.com', password: 'test1234')

    20.times do
      User.create(email: Faker::Internet.email, password: 'test1234')
    end

    5.times do
      channel = Channel.create(name: Faker::Team.creature)

      users = User.order('RANDOM()').limit(7)
      users.each do |user|
        ChannelUser.create(channel: channel, user: user)
      end
    end

    User.all.each do |user|
      rand(1..20).times do
        Post.create(user: user, content: Faker::Lorem.paragraph, created_at: rand(100).days.ago)
      end
    end
  end
end
