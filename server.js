const form=document.querySelector('form')


form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height=parseInt(document.getElementById('height').value)
    const weight=parseInt(document.getElementById('weight').value)
    const result=document.getElementById('result')


    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML='please give a vaid height'

    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML='please give a vaid weight'

    }
    else{
        const BMI=(weight /((height*height)/10000)).toFixed(2)
        result.innerHTML=`your BMI is${BMI}`
    }
})