
# Netstart
[net-start.vercel.app](https://net-start.vercel.app)

Simple startpage implementing DuckDuckGo bangs and a link list

`theme` and `work` states are stored in the local storage so they persist between sessions

`work` button adds an extra category and disables links with the `nsfw` attribute

![screen](/netstart.png?raw=true "netstart")

# Usage
- The search list is available with the searchbar button
- Type `!xx text` to search `text` on `xx` (where `xx` is an alias for a site), or click the desired search engine in the list

# Customization
- Edit link list in `links.json` 
- Edit searches list in `searches.json`
- Edit themes in `themes.css`

# TODO
- [ ] Add localhost support
- [ ] Keyboard navigation / shorcuts

# Backlog
- [x] Clean and refactor css
- [x] Add git link & license & date in sidebar
- [x] Make 100% mobile friendly
- [x] DateTime (unused for now)
- [x] Themes
- [x] LocalStorage for states
- [x] Search list + button
- [x] Search urls
- [x] Bangs
- [x] Search
- [x] Responsive (kindof)
- [x] Models
- [x] Data stored in json
- [x] Link list
