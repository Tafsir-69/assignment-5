  // Select all "Completed" buttons (in case there are multiple)
  const completedButtons = document.querySelectorAll('.Completed');

  completedButtons.forEach(button => {
    button.addEventListener('click', function () {
      const taskElement = document.getElementById('task');
      const checkElement = document.getElementById('check-box');
      const historyElement = document.getElementById('transection-History');

      let taskCount = parseInt(taskElement.textContent);
      let checkCount = parseInt(checkElement.textContent);

     
      if (taskCount > 0) {
        taskCount--;
        checkCount++;
        taskElement.textContent = taskCount.toString();
        checkElement.textContent = checkCount.toString();

        
        button.disabled = true;
        button.classList.remove('bg-[#3752FD]');
        button.classList.add('bg-gray-400');
        button.textContent = 'Done';

       
        const log = document.createElement('p');
        log.className = 'text-sm text-left mt-2 text-black';
        alert("✅Completed successfully")
        log.textContent = `✅ Task marked as completed at ${new Date().toLocaleTimeString()}`;
        historyElement.appendChild(log);
      }
    });
  });
 

 