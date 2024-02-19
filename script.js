const btns = document.getElementsByClassName('btn');
let btnClick = 0;
let totalCost = 0;
let grandTotal = 0;
let count = 0;
for (const btn of btns) {
  btn.addEventListener('click', e => {
    btnClick += 1;
    if (btnClick > 4) {
      alert('You can book only four tickets');
      return;
    }
    document.getElementById('seatCounter').innerText = btnClick;
    colorBtn(e.target.id);
    costDisplay();
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const mobile = document.getElementById('mobile').value;
      if (btnClick > 0 && name !== '' && mobile !== '') {
        window.location.href = 'modal.html';
      }
    });
  });
}

function colorBtn(btn) {
  document.getElementById(btn).style.background = 'green';
  const p = document.createElement('p');
  p.textContent = btn;
  const p2 = document.createElement('p');
  p2.textContent = 'Economoy';
  const p3 = document.createElement('p');
  p3.textContent = 550;
  let displayElement = document.getElementById('displayElement');
  displayElement.appendChild(p);
  displayElement.appendChild(p2);
  displayElement.appendChild(p3);
  document.getElementById(btn).disabled = true;
  let totalSeat = document.getElementById('totalSeat');
  totalSeat.innerText = parseInt(totalSeat.innerText) - 1;
}

function costDisplay() {
  const cost = document.getElementById('totalPrice');
  totalCost += 550;
  cost.innerText = totalCost;
  const grandCost = document.getElementById('grandTotal');
  grandTotal += 550;
  grandCost.innerText = grandTotal;

  const applyBtn = document.getElementById('applyBtn');

  applyBtn.addEventListener('click', () => {
    const couponInput = document.getElementById('couponInput').value;
    if (btnClick > 0 && couponInput === 'NEW15') {
      grandCost.innerText = grandTotal - grandTotal * 0.15;
      discount(grandTotal, 0.15);
      const inputBox = document.getElementById('inputBox');
      inputBox.style.display = 'none';
    } else if (btnClick > 0 && couponInput === 'Couple 20') {
      grandCost.innerText = grandTotal - grandTotal * 0.2;
      discount(grandTotal, 0.2);
      const inputBox = document.getElementById('inputBox');
      inputBox.style.display = 'none';
    }
    // else {
    //   alert('Please add more items');
    // }
  });
}

function discount(grandTotal, amount) {
  if (count === 0) {
    const discountAmount = document.getElementById('discountAmount');
    const p = document.createElement('p');
    p.textContent = 'DiscountAmount : ';
    const p2 = document.createElement('p2');
    p2.textContent = parseInt(grandTotal * amount);
    discountAmount.appendChild(p);
    discountAmount.appendChild(p2);
  }
  count++;
}