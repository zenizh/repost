# Transform camelCase param keys to snake_case.
# See https://stackoverflow.com/a/30557924
ActionDispatch::Request.parameter_parsers[:json] = -> (raw_post) do
  data = ActiveSupport::JSON.decode(raw_post)
  data = { _json: data } unless data.is_a?(Hash)
  data.deep_transform_keys!(&:underscore)
end
