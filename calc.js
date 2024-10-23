function display(num){
    result.value +=num
}

function clearAll(){
    result.value=''
}


function BackBtn(){
    result.value = result.value.slice(0,-1)
}

function equal(){
    try{result.value = eval(result.value)
        if(result.value=='undefined'){
            result.value='Error'
            setTimeout(()=>{result.value=''},1000)

        }
    }
    catch{result.value = 'Error'
        setTimeout(()=>{result.value=''},1000)
    }

    
}