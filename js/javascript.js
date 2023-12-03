//let uchwyt =  document.getElementById('grainbreed') //coś tam robimy
/*document.getElementsByTagName('section') 
document.getElementsByName('formularz')
document.getElementsByClassName('button')*/

function loadContent(site) {
    let html = new XMLHttpRequest()
    html.onloadend = e => {
        const htmlText = document.querySelector('#main')
        if (html.status == 404)
            htmlText.innerHTML = '<p class="error">Wystąpił błąd - nie można załadować określonego zasobu<p>'
        else { 
            htmlText.innerHTML = html.responseText
            window.history.replaceState({},"", `?address=${site}`)
        }
    }    
    html.open("POST", `./pages/${site}.html`)// site + '.html'
    html.send()
}


window.onload = (e) => {                
                    document.
                    querySelectorAll('.przycisk').
                    forEach( w => {
                        w.onclick = () => { 
                            loadContent(w.dataset.address)
                        }
                    })
                    let tmp = []
                    window.location.search.split('?').forEach( v =>{
                        if (v.split('=')[0] !== "") 
                            tmp[v.split('=')[0]] = v.split('=')[1]
                    } )                
                    loadContent(tmp.address ? tmp.address : "main")                    
                }