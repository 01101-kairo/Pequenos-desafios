async function getAddressByCep(){
  const cep = document.querySelector('input#cep').value
  try{
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()
    console.log(data)
    document.querySelector('input#rua').value = data.logradouro
    document.querySelector('input#bairo').value = data.bairro
    document.querySelector('input#cidade').value = data.localidade
  } catch (error){
    alert(error.message)
  }
}
