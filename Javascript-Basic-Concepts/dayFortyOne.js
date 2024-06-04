// Now you know fetch in javascript

// The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

/*
         response= fetch('something)
        🢇                         🢆
      Data⬅ ⬅ ⬅ ⬅ ⬅            Web Browser/Node 
                ⬆      ⬆                     ⬇
 Onfulfilled[]⮕       ⬆               Network Request
 On Rejection[] ⮕ ⮕ ⮕              🢇             🢆
      ⬇                             ✔                ✘
      ⬇                                 
      ⬇ 
      ⬇             Global Memory
      ⬇               response:
      ⬇                  ⬆
      ⬇                  ⬆
      ⬇                  ⬆
      ⮕ ⮕ ⮕ ⮕ ⮕ ⮕ ⮕
*/