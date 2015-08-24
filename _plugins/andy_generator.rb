require 'json'

module Jekyll
  class AndyGenerator < Jekyll::Generator

    SEARCH_INDEX_NAME = "search-index.js"
    LIST_FILE = "catalog.json"
    IDX_TEMPLATE_STRING = "lunr_index.add({ url: '{#id}', title: {#title}, body: {#body}})"

    def generate(site)
      return if site.pages.empty?

      js_file_name = File.expand_path(File.join(File.dirname(__FILE__), "search-index.js"))

      js_file = open(js_file_name)
      js_content = js_file.read

      index_entries = [js_content]
      json_entries = []

      site.posts.each_with_index do |post, index|
        entry = IDX_TEMPLATE_STRING.sub "{#id}", post.url
        entry.sub! "{#title}", post.title.to_json
        entry.sub! "{#body}", post.content.to_json
        index_entries << entry

        json_entries << "{ \"title\":"  + post.title.to_json + ", \"url\":\"" + post.url + "\", \"excerpt\":"  + post.excerpt.to_json + " }"
      end

      page_path = site.pages.first.path
      posts_dir = File.dirname(page_path)
      asset_path = "/assets"
      if (posts_dir.start_with? "_posts")
        asset_path = "/.." + asset_path
      end
      assets_dir = File.expand_path(posts_dir + asset_path)

      generated_js_file = assets_dir + "/js/" + SEARCH_INDEX_NAME

      g_js_file = File.open generated_js_file, "w"
      g_js_file.puts index_entries.join("\n")

      g_js_file.close

      # create entries
      json_file = File.open assets_dir + "/js/" + LIST_FILE, "w"
      json_file.puts "[" + json_entries.join(",") + "]"
      json_file.close
    end
  end
end
