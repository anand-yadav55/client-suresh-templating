export function changeTheme() {
  alert('Called')
  const theme = window.localStorage.getItem('theme')
    ? window.localStorage.getItem('theme')
    : 'light'
  elementTreeToggler(theme === 'dark' ? 'dark' : 'light')
  window.localStorage.setItem('theme', theme)
  return theme
}

export function elementTreeToggler(theme) {
  let style = document.querySelector('#themeToggler')
  if (style) {
    style.innerHTML = themeClass(theme)
  } else {
    style = document.createElement('style')
    style.innerHTML = themeClass(theme)
    style.setAttribute('id', 'themeToggler')
    document.querySelector('body').prepend(style)
  }
}

function themeClass(theme) {
  let changedClasses = ''
  if (theme === 'dark') {
    const stylesArray = [
      `.hover-dark:hover,
            .hover-dark:focus,
            .ant-table-cell:hover,
            .ant-table-row:hover,
            .ant-table-cell:focus,
            .ant-table-row:focus {
                color:hsl(0, 0%, 90%) !important;
                transform: all 1s ease-in;
                cursor: pointer;
            }`,

      `.bg,
            .ant-menu,
            .ant-table-cell,
            .ant-layout-content,
            .ant-row,
            .ant-card,
            .ant-drawer-header,
            .ant-drawer-body {
                
                color: hsl(0, 0%, 97%) !important;
                border-color: hsl(209, 100%, 7%);
            }`,

      `.bg-dark-900 {
                background-color: hsl(209, 100%, 5%) !important;
                color: hsl(0, 0%, 97%) !important;
                border-color: hsl(209, 100%, 7%);
            }`,

      `.ant-menu-item-selected,
            .ant-menu-item-active,
            .ant-menu-item-selected:hover,
            .ant-menu-item-active:hover,
            .ant-menu-item-selected:focus,
            .ant-menu-item-active:focus,
            .ant-menu-submenu-open,
            .ant-menu-submenu-open:hover,
            .ant-menu-submenu-open:focus {
                background-color: hsl(209, 100%, 1%) !important;
                cursor: pointer;
            }`,

      `.bg-text-primary,
            .ant-statistic-content,
            .ant-drawer-title,
            .anticon, h2, h3, h4,
            .ant-alert-message {
                color: hsl(0, 0%, 97%) !important;
            }`,

      `.bg-text-secondary,
            .ant-alert-description,
            .ant-statistic-title,
            .ant-empty-description,
            .ant-alert-description {
                color: hsl(0, 1%, 70%) !important;
            }`,

      `.bg-text-sdark {
                color: hsl(0, 0%, 65%) !important;
            }`,

      `.bg-dark-900,
            .ant-alert {
                background-color: hsl(209, 100%, 5%) !important;
                color: hsl(0, 0%, 97%) !important;
                border-color: hsl(209, 100%, 7%);
            }`,

      `.bg-dark-500,
            .slick-slider {
                background-color: hsl(209, 100%, 10%) !important;
                color: hsl(0, 0%, 97%) !important;
                border-color: hsl(209, 100%, 7%);
            }`,
    ]
    for (let change of stylesArray) {
      changedClasses += `${change} `
    }
  }
  return changedClasses
}
