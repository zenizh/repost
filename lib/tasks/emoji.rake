namespace :emoji do
  desc 'Generate JSON file consists of emoji names and paths'
  task :generate_json do
    include ActionView::Helpers::AssetUrlHelper

    emojis = {}
    Emoji.all.each do |emoji|
      emojis[emoji.name] = image_path("emoji/#{emoji.image_filename}", skip_pipeline: true)
    end

    File.open(Rails.root.join('app/javascript/utils/emojis.json'), 'w') do |f|
      f.puts JSON.generate(emojis)
    end
  end
end
