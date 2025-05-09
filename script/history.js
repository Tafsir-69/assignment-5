 function clearHistory() {
    
    document.getElementById('task').textContent = '06';
    document.getElementById('check-box').textContent = '23';

    
    document.getElementById('transection-History').innerHTML = '';

    
    const buttons = document.querySelectorAll('.Completed');
    buttons.forEach(btn => {
      btn.disabled = false;
      btn.textContent = 'Completed';
      btn.className = 'bg-[#3752FD] px-4 rounded-lg w-28 h-10 text-white Completed';
    });

    
    alert('Cleared history!');
  }

  
  document.getElementById('clearHistory').addEventListener('click', clearHistory);

