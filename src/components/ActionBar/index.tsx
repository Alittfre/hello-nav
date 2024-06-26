import PandaBtn from '../PandaBtn'
import iconList from '../../assets/images/icon-list.svg'
import iconCategory from '../../assets/images/icon-category.svg'
import iconSetting from '../../assets/images/icon-setting.svg'
import iconSettingActive from '../../assets/images/icon-setting-active.svg'
import iconSearch from '../../assets/images/icon-search.svg'
import iconClear from '../../assets/images/icon-clear.svg'
import { ReactSVG } from 'react-svg'
import './index.less'

function ActionBar({
  filterKey,
  type,
  toggleType,
  toggleSetting,
  filterInput,
  searchInput,
  onFliterClear,
  onSearchClear,
  isSettingMode,
  searchKey,
}: ToolBarProps & { isSettingMode: boolean }) {
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const searchUrl = `https://www.google.com/search?q=${searchKey}`
      window.open(searchUrl, '_blank')
    }
  }
  return (
    <div className="tool-bar">
      <div className="filter-bar">
        <span className="filter-bar__btn">
          <PandaBtn />
          <span className="filter-bar__toggle-btn" onClick={toggleType} onKeyDown={() => {}}>
            <ReactSVG className="icon" src={type === 'list' ? iconList : iconCategory}></ReactSVG>
          </span>
          <span className="filter-bar__toggle-btn" onClick={toggleSetting} onKeyDown={() => {}}>
            <ReactSVG className="icon setting-icon" src={isSettingMode ? iconSettingActive : iconSetting}></ReactSVG>
          </span>
        </span>
        <span className="filter-bar__input-warp">
          <input
            aria-label="filterIpt"
            className="search-input"
            type="text"
            value={filterKey}
            onChange={() => {}}
            onInput={filterInput}
          />
          <div className="input-icon-wrap">
            <ReactSVG className="icon search-icon" src={iconSearch}></ReactSVG>
            <ReactSVG className="icon clear-icon" src={iconClear} onClick={onFliterClear}></ReactSVG>
          </div>
        </span>
      </div>
      <span className="search-bar__input-warp">
        <input
          aria-label="SearchIpt"
          className="search-input"
          type="text"
          placeholder="按下回车进行谷歌搜索"
          value={searchKey}
          onChange={() => {}}
          onInput={searchInput}
          onKeyUp={handleEnterKeyDown}
        />
        <div className="input-icon-wrap">
          <ReactSVG className="icon clear-icon" src={iconClear} onClick={onSearchClear}></ReactSVG>
        </div>
      </span>
    </div>
  )
}

export default ActionBar
