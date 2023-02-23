# SearchBox

## Prgress
    ⬜️ Finished
<!-- ✅ -->

## Src and Usage
- [source code](https://github.com/zilionixx/zilionixx-block-explorer/blob/master/src/components/SearchBox/SearchBox.tsx)
- This component is used on all pages for global search

## Passing props 

```
import SearchBox from '../../components/SearchBox/SearchBox'

return(
    <div>
        <SearchBox filter="filter_value" keyword="keyword" />
    </div>
)

```
### Parameter description
- filter
    * All Filters
    * Addresses
    * Tokens
    * Name Tags
    * Labels
    * Websites
- keyword
    * Any keyword value
    * if none will redirect to no search result page.