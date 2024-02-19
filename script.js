
//selected seate 
let allBtn = document.getElementsByClassName('set-btn');
let count = 0;
for (let btn of allBtn) {
    btn.addEventListener('click', function (event) {
       
        // btn.setAttribute("disabled", "true");

        if (count < 4) {
            btn.classList.add('bg-[#1DD100]');
            count++;
        }
        else if (count === 4) {
            alert('One persone can selected only 4 seat..');
            return;
        }

        //count steat number
        let totalSeat = document.getElementById('total-seat');
        let availableSeat = 40 - count;
        totalSeat.innerText = availableSeat;


        //selected seat
        let selectedSeat = document.getElementById('selected-seat').innerText = count;

        //seat list
        if (count <= 4) {
            let seatName = event.target.innerText;
            let seatList = document.getElementById('seat-list');

            let li = document.createElement('li');
            li.classList.add('flex','justify-between');

            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            p.innerText = seatName;
            p2.innerText = 'Economoy';
            p3.innerText = '550';

            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(p3);

            seatList.append(li)


        }
    
        //calculate total price
        let totalPrice = document.getElementById('total-price');
        let price = count * 550;
        totalPrice.innerText = price;

        //grand price 
        let grandPrice = document.getElementById('grand-price');
        let gPrice = price;
        grandPrice.innerText = price;

        //cuppon-btn 
        if (count === 4) {
            //disabled cuppon btn
            let cupponBtn = document.getElementById('cuppon-btn');
            cupponBtn.removeAttribute('disabled');

            //disable discound price and cuppon section
            cupponBtn.addEventListener('click', function () {
                //show discound section
                let discoundSection = document.getElementById('discound-section');
                discoundSection.classList.remove('hidden');
                //hidden cuppon section
                let cupponSection = document.getElementById('cuppon-section');
                cupponSection.classList.add('hidden');


                //cuppon apply
                let cupponInput = document.getElementById('cuppon-input').value;

                //calculate discound price
                if (cupponInput === 'NEW15') {
                    let discoundPricce = document.getElementById('discound-price');
                    let calculateDiscound = price * 0.15;
                    discoundPricce.innerText = calculateDiscound;

                    //discound grand price update
                    let grandPrice = document.getElementById('grand-price');
                    let gPrice = price - calculateDiscound;
                    grandPrice.innerText = gPrice;
                }
                else if(cupponInput === 'Couple 20'){
                    let discoundPricce = document.getElementById('discound-price');
                    let calculateDiscound = price * 0.2;
                    discoundPricce.innerText = calculateDiscound;

                    //discound grand price update
                    let grandPrice = document.getElementById('grand-price');
                    let gPrice = price - calculateDiscound;
                    grandPrice.innerText = gPrice;
                }

            })


        }
        //next btn inavled
        let inputNumber = document.getElementById('input-number').value;
        if(count > 0){
            let nextBtn = document.getElementById('next-btn');
            nextBtn.removeAttribute('disabled');
        }
        
    })
    

}


