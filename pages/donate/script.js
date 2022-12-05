;(function () {
  'use strict';

  const donation = document.getElementById('donation-amount'),
        donationList = document.getElementsByClassName('donation-list'),
        donationAmout = document.getElementById('donation-amount');

        for (let i = 0; i < 8; i++ ) {
          if ( donationList[i].hasAttribute('checked')) donation.value = donationList[i].value;
          donationList[i].parentElement.addEventListener('click', getDonationNum);
        }

        donationAmout.addEventListener('input', donationCheck);

        function getDonationNum(el) {
          donation.value = el.target.attributes[3].value;
        }

        function donationCheck() {
          if (donation.value.length > 4) donation.value = donation.value.slice(0,4);
          for (let key in donationList) {
            if ( key < 8 ) {
              if (donationList[key].checked) donationList[key].checked = false;

              if (donation.value === donationList[key].value) donationList[key].checked = true;
            }
          }
        }

})();
