// // // // console.log('Hello World!')


// // // // const name = 'Arief Yusron'
// // // // const age = 17
// // // // const isMale = true

// // // // console.log(name)

// // // // console.log(age)


// // // // const panjang = 10
// // // // const lebar = 5

// // // // console.log(panjang + lebar)
// // // // console.log(panjang)

// // // // console.log(panjang === 11)

// // // // console.log('logika', panjang === 10 || lebar === 10)

// // // // if(panjang === 10){
// // // //   console.log('panjang adalah 10')
// // // // } else if(panjang === 11) {
// // // //   console.log('panjang adalah 11')
// // // // } else {
// // // //   console.log('panjang error')
// // // // }

// // // // switch (panjang) {
// // // //   case 10:
// // // //     console.log('panjang adalah 10')
// // // //     break;
// // // //   case 11:
// // // //     console.log('panjang adalah 11')
// // // //     break;
// // // //   default:
// // // //     console.log('panjang error')
// // // //     break;
// // // // }

// // // // const username = prompt('Masukkan username Anda : ');
// // // // const password = prompt('Masukkan password Anda : ');
// // // // if (username === 'admin' && password === 'admin') {
// // // //     console.log('login berhasil!');
// // // // } else if (username !== 'admin') {
// // // //     console.log('Username dan password salah');
// // // // } else {
// // // //     console.log('Password salah.');
// // // // }

// // // function helloWorld(name, age) {
// // //   console.log("Hello World")
// // //   console.log(name)
// // //   console.log(age)
// // // }

// // // helloWorld("Arief Yusron", 17)

// // // console.log("--------------")

// // // function iniVoid() {
// // //   console.log('ini void')
// // // }

// // // function iniReturn() {
// // //   console.log('ini return')
// // //   return "ini Return"
// // // }

// // // function luasPersegi(panjang, lebar) {
// // //   const luas = panjang * lebar
// // //   return luas
// // // }

// // // function luasTanah() {
// // //   return luasPersegi(10, 6) + luasPersegi(11, 5)
// // // }

// // // const luasTanahSaya = luasPersegi(10, 5) + luasPersegi(11, 5)
// // // console.log(luasTanahSaya)

// // // function hitungOngkosParkir(kendaraanParams, durasiParkirParams) {
// // //   const kendaraan = kendaraanParams;
// // //   const durasiParkir = durasiParkirParams;
// // //   const tarifParkirMotor = 4000;
// // //   const tarifParkirMobil = 10000;
// // //   const tarifParkirMotorPerJam = 1000;
// // //   const tarifParkirMobilPerJam = 4000;
// // //   let tarifParkirTotal;

// // //   if (kendaraan === "motor") {
// // //     if (durasiParkir <= 2) {
// // //       return tarifParkirMotor;
// // //     } else {
// // //       tarifParkirTotal = tarifParkirMotor + tarifParkirMotorPerJam * (durasiParkir - 2);
// // //       return tarifParkirTotal;
// // //     }
// // //   } else if (kendaraan === "mobil") {
// // //     if (durasiParkir <= 2) {
// // //       return tarifParkirMobil;
// // //     } else {
// // //       tarifParkirTotal = tarifParkirMobil + tarifParkirMobilPerJam * (durasiParkir - 2);
// // //       return tarifParkirTotal;
// // //     }
// // //   }
// // // }

// // // function tarif(kendaraan, durasiJam) {
// // //   let tarifAwal = 0;
// // //   let tarifPerJam = 0;

// // //   if (kendaraan === "motor") {
// // //     tarifAwal = 4000;
// // //     tarifPerJam = 1000;
// // //   } else if (kendaraan === "mobil") {
// // //     tarifAwal = 10000;
// // //     tarifPerJam = 4000;
// // //   } else {
// // //     return "ga boleh masuk cuy";
// // //   }

// // //   if (durasiJam <= 2) {
// // //     return tarifAwal;
// // //   } else {
// // //     let tambahanJam = durasiJam - 2;
// // //     return tarifAwal + tambahanJam * tarifPerJam;
// // //   }
// // // }

// // // function hitungParkir(kendaraan, jamParkir) {
// // //   if (kendaraan === "motor") {
// // //     if (jamParkir <= 2) {
// // //       return 4000
// // //     } else {
// // //       return 4000 + (jamParkir - 2) * 1000
// // //     }
// // //   } else if (kendaraan === "mobil") {
// // //     if (jamParkir <= 2) {
// // //       return 10000
// // //     } else {
// // //       return 10000 + (jamParkir - 2) * 4000
// // //     }
// // //   } else {
// // //     return "Kendaraan salah ketik"
// // //   }
// // // }

// // // const hitungParkir = () => {
// // //   if (kendaraan === "motor") {
// // //     if (jamParkir <= 2) {
// // //       return 4000
// // //     } else {
// // //       return 4000 + (jamParkir - 2) * 1000
// // //     }
// // //   } else if (kendaraan === "mobil") {
// // //     if (jamParkir <= 2) {
// // //       return 10000
// // //     } else {
// // //       return 10000 + (jamParkir - 2) * 4000
// // //     }
// // //   } else {
// // //     return "Kendaraan salah ketik"
// // //   }
// // // }


// // // const variableArray = [["Arief", 17], [true, false]]
// // // // console.log(variableArray)

// // // const variableObject = {
// // //   name: "Arief Yusron",
// // //   age: 17,
// // //   isMale: true,
// // //   address: {
// // //     city: "Bandung",
// // //     province: "Jawa Barat"
// // //   },
// // //   members: [
// // //     {
// // //       name: "Jamal Musiala",
// // //       age: 20
// // //     },
// // //     {
// // //       name: "Lamin yamal",
// // //       age: 17
// // //     }
// // //   ]
// // // }

// // // console.log(variableObject)

// // // const totalHargaParkir = (type, duration) => {
// // //   if(type === 'motor') {
// // //     if(duration <= 2) {
// // //       return 4000
// // //     } else {
// // //       return 4000 + (duration - 2) * 1000
// // //     }

// // //   } else if(type === 'mobil') {

// // //   } else {
// // //     return "Kendaraan tidak bisa masuk"
// // //   }
// // // }


// // // const listName = ["Arief", "Yusron"]

// // // console.log(listName)
// // // listName.push("Budi")
// // // listName.unshift("Joko")
// // // console.log(listName)


// // // const todoList = []
// // // console.log('before', todoList)

// // // const addTodoList = (text) => {
// // //   todoList.unshift(text)
// // // }

// // // addTodoList("Belajar JS")
// // // addTodoList("Kerjakan task")
// // // addTodoList("Kumpulkan task")

// // // console.log("after",todoList)
// // // i++ -> i = i + 1 -> i += 1


// // // const list = ["Arief", "Yusron", "Budi", "Joko"]

// // // map()
// // // forEach()

// // // const text = "Hello World"
// // // const hello = "Heloo"

// // // const convertToObject = (value) => {
// // //   return {
// // //     name: value,
// // //     age: 17
// // //   }
// // // }

// // // const returnMap = list.map((item) => convertToObject(item))

// // // console.log(returnMap)

// // // list.forEach((item) => {
// // //   console.log(item)
// // // })

// // // console.log(returnMap)
// // // console.log(result)


// // // for (let i = 0; i < 10; i++) {
// // //   console.log("run")
// // // }
// // // const nama = ['Chirzin', 'Attabiq', 'Ciro', 'Budi']

// // // for (let i = 0; i < nama.length; i++) {
// // //     console.log(nama[i]);
// // // }

// // // let i = 0
// // // while(i < 10) {
// // //   console.log('Halo')
// // //   i++
// // // }

// // // const list = ["Arief", "Yusron"]
// // // const list2 = ["Budi", "Joko"]
// // // const listNew = ["Budi", ...list, ...list2]

// // // console.log(list)
// // // console.log(listNew)

// // // const data = {
// // //   name: "Arief Yusron",
// // //   age: 17,
// // // }

// // // const newData = {
// // //   ...data,
// // //   address: "Bandung"
// // // }

// // // console.log(data)
// // // console.log(newData)

// // // const hargaParkir = () => {
// // //   return 10
// // // }

// // // console.log(hargaParkir())


// // // let todoList = []

// // // const addTodoList = (desc) => {
// // //   todoList = [
// // //     {
// // //       desc,
// // //       status: 'todo'
// // //     },
// // //     ...todoList
// // //   ]

// // //   const emptyText = document.getElementById('empty-text')
// // //   if(emptyText !== null) {
// // //     emptyText.remove()
// // //   }

// // //   const container = document.getElementById('container')
// // //   const ul = document.createElement('ul')
// // //   ul.id = 'todo-list'

// // //   const wrapTodoList = document.getElementById('todo-list')
// // //   if(wrapTodoList !== null) {
// // //     wrapTodoList.remove()
// // //   }
  
// // //   todoList.forEach((item) => {
// // //     const li = document.createElement('li')
// // //     li.textContent = `${item.desc} - ${item.status}`
// // //     ul.appendChild(li)
// // //   })

// // //   container.appendChild(ul)
// // // }

// // // const editTodoList = (index, data) => {
// // //   todoList[index] = {
// // //     ...todoList[index],
// // //     ...data,
// // //   }
// // // }

// // // const deleteTodoList = (indexParam) => {
// // //   todoList = todoList.filter((_, index) => index !== indexParam)
// // // }

// // // const container = document.getElementById('container')

// // // if(todoList.length === 0) {
// // //   const desc = document.createElement('p')
// // //   desc.id = "empty-text"
// // //   desc.textContent = "Tida ada data"

// // //   container.appendChild(desc)
// // // }

// // // document.getElementById('button-add').addEventListener('click', () => {
// // //   addTodoList('service motor')
// // // })



// // // const h1 = document.getElementById("judul")

// // // h1.textContent = 'Belajar DOM'
// // // h1.className = 'title'

// // // const container = document.getElementById('container')

// // // const desc = document.createElement('p')
// // // desc.textContent = "ini paragraf container"

// // // container.appendChild(desc)

// // // const buttonClick = document.getElementById('button-click')

// // // buttonClick.addEventListener("click", () => {
// // //   if(h1.style.color === 'blue') {
// // //     h1.style.color = ''
// // //   } else {
// // //     h1.style.color = 'blue'
// // //   }
// // // })

// // const form = document.getElementById('form-name')

// // form.addEventListener('submit', (e) => {
// //   e.preventDefault()

// //   const firstName = e.target.firstName.value
// //   const lastName = e.target.lastName.value
// //   const tnc = e.target.tnc.checked
// //   const gender = e.target.gender.value

// //   localStorage.setItem('name', `${firstName} ${lastName}`)

// //   const container = document.getElementById('container')
  
// //   const name = document.createElement('p')
// //   name.textContent = `${firstName} ${lastName}`
// //   container.appendChild(name)
  
// //   form.reset()
// // })

// // const name = localStorage.getItem('name')

// if(name !== null) {
//   const container = document.getElementById('container')
  
//   const nameElement = document.createElement('p')
//   nameElement.textContent = name
//   container.appendChild(nameElement)
// }

// // // let data = []

// // // const submitData = (newData, getAllData) => {
// // //   data = [newData, ...data]

// // //   getAllData?.()
// // // }

// // // const tampilkanLog = () => {
// // //   console.log('setelah add')
// // // }

// // // submitData('arief')
// // // submitData('yusron', tampilkanLog())
// // // submitData('jamal', () => {
// // //   console.log('tambah')
// // //   console.log('tambah')
// // // })

// const showData = (res) => {
//   const container = document.getElementById('container')
//   const ul = document.createElement('ul')
//   res.forEach((item) => {
//     const li = document.createElement('li')
//     li.textContent = item.title
//     ul.appendChild(li)
//   });

//   const loading = document.getElementById('loading')
//   loading.remove()
//   container.appendChild(ul)
// }

// const getDataWithFetch = () => {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => {
//       if(res.status >= 400) {
//         throw new Error(`HTTP error! Status: ${res.status}`);
//       }
//       return res.json()
//     })
//     .then((res) => {
//       showData(res)
//     }).catch((err) => {
//       const loading = document.getElementById('loading')
//       loading.textContent = err
//     })
// }

// const getDataWithFetchAsyncAwait = async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    
//     if(res.status >= 400) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     const data = await res.json()
//     showData(data)

//   } catch (err) {
//     const loading = document.getElementById('loading')
//     loading.textContent = err
//   }
// }

// const getDataWithAxios = () => {
//   axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => {
//       showData(res.data)
//     }).catch((err) => {
//       console.log('error')
//     })
// }

// const getDataWithAxiosAsyncAwait = async () => {
//   try {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
//     showData(res.data)
//   } catch(err) {
//     console.log('error')
//   } finally {
//     //ga peduli error atau sukses yg penting selesai
//   }
// }

// const postDataWithAxios = async (userId, title, body) => {
//   try {
//     await axios.post('https://jsonplaceholder.typicode.com/posts', {
//       userId,
//       title,
//       body
//     })

//     console.log('berhasil')
//   } catch (err) {

//   }
// }

// getDataWithAxiosAsyncAwait()
// postDataWithAxios(1, 'title', 'body')

const app = document.getElementById('app')

const root = ReactDOM.createRoot(app)

const title = 'Belajar React'

const Header = ({ title, subTitle = 'Ini nilai default' }) => {
  return (
    <div id="header">
      <h1 className="title">{`${title}-${subTitle}`}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

const Body = ({ children, renderBody }) => {
  return (
    <div id="body">
      <p>ini paragraf</p>
      <p>ini paragraf 2</p>
      {children}
      {renderBody}
    </div>
  )
}

const Footer = () => {
  return (
    <div id="footer">
      <label>ini footer</label>
    </div>
  )
}

const handleClickButton = () => {
  console.log('name')
}

root.render(
  <>
    <Header title="Ini Header Pertama" subTitle="Ini adalah subTitle 1" />
    <Header title="Ini Header Kedua" />
    <Body>
      <div>
        <h1>Ini child</h1>
      </div>
    </Body>
    <Footer />

    <button onClick={handleClickButton}>Klik</button>
  </>
)
