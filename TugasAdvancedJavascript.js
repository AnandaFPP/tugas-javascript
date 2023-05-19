// Nomor 1

//callback function

const getDataPosts1 = (method, url, callback) => {
        const ajax = new XMLHttpRequest()
        ajax.open(method, url)
        ajax.send()

        ajax.onreadystatechange = () => {
            if (ajax.status === 200) {
                const result = JSON.parse(ajax.responseText)
                callback(result)
            } else {
                callback('Data not found...')
            }
        }
}

getDataPosts1('GET', 'https://jsonplaceholder.typicode.com/posts', (result)=>{
    result.map((item)=>{
        console.log(`Judul : ${item.title}`)
    })
})

// promise

const getDataPosts2 = (method, url) => {
    return new Promise((success, reject)=> {
        const ajax = new XMLHttpRequest()
        ajax.open(method, url)
        ajax.send()

        ajax.onreadystatechange = () => {
            setTimeout(()=> {
                if (ajax.status === 200) {
                    const result = JSON.parse(ajax.responseText)
                    success(result)
                } else {
                    reject('Data not found...')
                }
            }, 2000)
        }
    })
}

getDataPosts2('GET', 'https://jsonplaceholder.typicode.com/posts',)
.then((res) => {
    res.map((item) => {
        console.log(`Judul : ${item.title}`)
    })
})

.catch((err) => {
    console.log(err)
})

// Nomor 2

const getDataAjax = (method, url)=>{
    return new Promise((resolve, reject)=>{
        const ajax = new XMLHttpRequest()
        ajax.open(method, url)
        ajax.send()
        
        ajax.onreadystatechange = ()=>{
            setTimeout(()=>{
                if(ajax.status === 200){
                    const result = JSON.parse(ajax.responseText)
                    resolve(result)
                }else{
                    reject('Data not found...')
                }
            }, 4000)
        }    
    })
   
}

getDataAjax('GET', 'https://pokeapi.co/api/v2/pokemon')
.then((res)=>{
    console.log(res)
    res.results.map((item)=>{
        console.log(`Nama : ${item.name}`)
        console.log(`Url : ${item.url}`)
        const id = item.url.split('/').slice(-2)[0]
        console.log(`Image : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
        console.log('---------------')
    })
})
.catch((err)=>{
    console.log(err)
})