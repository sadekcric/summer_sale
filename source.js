const cards=document.querySelectorAll('.card');
[...cards].forEach(card=>{
  card.addEventListener('click', function(e){
    calculateCard(this, 'title-container');
    calculatePrice(this);
    totalAmount();
  })

  document.getElementById('apply-btn').addEventListener('click', function(e){
    discount();
    
  })
  
})
