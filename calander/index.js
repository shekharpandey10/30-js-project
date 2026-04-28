

document.addEventListener('DOMContentLoaded', () => {
    const monthContainer = document.querySelector('.month-container')
    const leftBtn = document.querySelector('.left-btn')
    const rightBtn = document.querySelector('.right-btn')
    const dateBody = document.querySelector('.table-body')
    const today = document.querySelector('.today')

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const getTimeAndDate = () => {
        const currentDate = new Date()
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();
        let todayDay = currentDate.getDate()
        return { currentMonth, currentYear, todayDay }
    }
    let { currentMonth, currentYear, todayDay } = getTimeAndDate()


    // monthContainer.textContent = `${months[currentMonth]} ${currentYear}`
    const renderCalander = (month, year, day = null) => {

        monthContainer.textContent = `${months[month]} ${year}`
        dateBody.innerHTML = ''
        const firstDay = new Date(year, month, 1).getDay()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        let tr = document.createElement('tr')
        let colCount = 0
        for (let i = 0; i < firstDay; i++) {
            const td = document.createElement('td')
            td.classList.add('blank-date', 'day-cell');
            tr.append(td)
            colCount++
        }
        for (let i = 1; i <= daysInMonth; i++) {
            if (colCount === 7) {
                dateBody.appendChild(tr)
                tr = document.createElement('tr')
                colCount = 0
            }
            const td = document.createElement('td')
            td.classList.add('day-cell')

            td.textContent = i
            if (day && i === day) {
                td.classList.add('today-cell')
            }
            tr.append(td)
            colCount++
        }

        if (colCount > 0) {
            dateBody.appendChild(tr);
        }

    }

    today.addEventListener('click', () => {

        const { currentMonth, currentYear, todayDay } = getTimeAndDate()

        renderCalander(currentMonth, currentYear, todayDay)
    })

    leftBtn.addEventListener('click', () => {
        if (currentMonth === 0) {
            currentMonth = 11
        } else {
            currentMonth--;
        }
        renderCalander(currentMonth, currentYear)
    })
    rightBtn.addEventListener('click', () => {

        if (currentMonth === 11) {
            currentMonth = 0
        } else {
            currentMonth++;
        }
        renderCalander(currentMonth, currentYear)

    })

    renderCalander(currentMonth, currentYear, todayDay)

})