const cards=document.querySelectorAll('.card');
[...cards].forEach(card=>{
  card.addEventListener('click', function(){
    calculateCard(this, 'title-container');
    calculatePrice(this);
    
    document.getElementById('apply-btn').addEventListener('click', function(){
      discount();
    })
    totalAmount()
  })
})
