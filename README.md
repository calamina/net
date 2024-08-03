
# Netstart
[net-start.vercel.app](https://net-start.vercel.app)

Simple startpage implementing DuckDuckGo bangs and a link list

`theme` and `work` states are stored in the local storage so they persist between sessions

`work` button adds an extra category and disables links with the `nsfw` attribute

`netstart`
![screen](/netstart.png?raw=true "netstart")

`themes`
![screen](/netstart-themes.png?raw=true "netstart themes")

`bangs`
![screen](/netstart-bangs.png?raw=true "netstart bangs")

`work toggled`
![screen](/netstart-work.png?raw=true "netstart work")

`mobile`  
![screen](/netstart-mobile.png?raw=true "netstart mobile")

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
