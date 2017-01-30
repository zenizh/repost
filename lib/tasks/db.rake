namespace :db do
  desc 'Fill with sample data'
  task populate: :environment do
    5.times do
      Team.create(domain: Faker::Team.creature)
    end

    100.times do
      User.create(email: Faker::Internet.email, password: 'test1234')
    end

    Team.all.each do |team|
      users = User.order('RANDOM()').limit(20)
      users.each do |user|
        Member.create(
          team: team,
          user: user,
          screen_name: Faker::Internet.user_name
        )
      end
    end

    Team.all.each do |team|
      rand(1..5).times do
        channel = Channel.create(team: team, name: Faker::Team.creature)

        members = team.members.order('RANDOM()').limit(5)
        members.each do |member|
          ChannelMember.create(channel: channel, member: member)
        end
      end
    end

    Member.all.each do |member|
      rand(1..10).times do
        Post.create(member: member, content: Faker::Lorem.paragraph)
      end
    end
  end
end
