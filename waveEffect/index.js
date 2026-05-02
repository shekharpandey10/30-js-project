


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container')
    const grid = []

    const row = 15;
    const col = 15;

    const animatePoints = (i, j, visited = new Set()) => {
        const key = `${i},${j}`
        if (i < 0 || j < 0 || i >= row || j >= col || visited.has(key)) return
        visited.add(key)
        const span = grid[i][j]
        setTimeout(() => {

            span.classList.add('point-increase')
            animatePoints(i - 1, j, visited)
            animatePoints(i, j - 1, visited)
            animatePoints(i + 1, j, visited)
            animatePoints(i, j + 1, visited)
        }, 100);

        setTimeout(() => {
            span.classList.remove('point-increase')
            console.log(i, j)

        }, 300);



    }

    const renderGrid = () => {
        for (let i = 0; i < row; i++) {
            const div = document.createElement('div')
            const rowArr = []
            for (let j = 0; j < col; j++) {
                const span = document.createElement('span')
                span.classList.add('point')
                span.addEventListener('click', () => {
                    animatePoints(i, j)
                })
                div.append(span)
                rowArr.push(span)
            }
            container.append(div)
            grid.push(rowArr)
        }
    }
    renderGrid()
    console.log(container[0]);
})