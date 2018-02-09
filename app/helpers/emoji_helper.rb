module EmojiHelper
  def emojify(content)
    content.gsub(/:([\w+-]+):/) do |match|
      if emoji = Emoji.find_by_alias($1)
        tag.img(
          src: image_path("emoji/#{emoji.image_filename}", skip_pipeline: true),
          width: 20,
          height: 20,
          class: 'text-middle'
        )
      else
        match
      end
    end
  end
end
