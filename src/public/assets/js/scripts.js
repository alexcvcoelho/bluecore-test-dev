const dataMenus = [...document.querySelectorAll('[data-menu]')]
dataMenus.forEach(dataMenu => {
  if (dataMenu) {
    dataMenu.addEventListener('click', (e) => {
      e.preventDefault()
      const menu = document.querySelector(dataMenu.dataset.menu)
      menu.classList.toggle('active')
    })
  }
})

const dataDismiss = [...document.querySelectorAll('[data-dismiss]')]
dataDismiss.forEach(el => {
  if (el) {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const element = document.querySelector(el.dataset.dismiss)
      element.classList.remove('active')
    })
  }
})

if (document.querySelector('.slider')) {
  document.querySelector('.slider .prev').addEventListener('click', (e) => {
    e.preventDefault()
    const slider = document.querySelector('.slider-wrapper')
    slider.scrollLeft -= 500
  })
  document.querySelector('.slider .next').addEventListener('click', (e) => {
    e.preventDefault()
    const slider = document.querySelector('.slider-wrapper')
    slider.scrollLeft += 500
  })
}

const tabs = [...document.querySelectorAll('[data-tab]')]
if (tabs) {
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault()
      if (document.querySelector('.active[data-tab]')) {
        document.querySelector('.active[data-tab]').classList.remove('active')
      }
      document.getElementById('tabs').classList.add('active')
      document.getElementById('choose').classList.remove('active')
      const tabContent = e.target.dataset.tab
      document.getElementById(tabContent).classList.add('active')
      const buttons = [...document.querySelectorAll(`[data-tab="${tabContent}"]`)]
      buttons.forEach(button => {
        button.classList.add('active')
      })
    })
  })
}
