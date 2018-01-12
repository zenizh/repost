module MarkdownHelper
  def markdown(markdown)
    unless @markdown
      extentions = {
        autolink: true,
        strikethrough: true,
        tables: true
      }
      @markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, extentions)
    end

    @markdown.render(markdown)
  end

  def sanitize(html)
    Sanitize.fragment(html, Sanitize::Config::RELAXED).html_safe
  end
end
