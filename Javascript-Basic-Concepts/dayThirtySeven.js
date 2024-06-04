// Async Javascript fundamentals

/*
--> Javascript => Synchronous, Single Threaded

--> Execution Context => execute one line of code at a time
                               console log -> 1
                               console log -> 2
                               ... so on
                            Note: Each operation waits for the last one to complete before executing

                            CALL Stack, Memory Heap  

                            
Blocking Code               vs               Non Blocking Code
    🢃                                              🢃
Block the flow of Program                 Does not block execution
    🢃                                              🢃            
Read File Sync                                Read Fix Async






                JS Engine                                       Web API
               🢇       🢆                                         🢃
      Memory Heap      CALL STACK          (call)               DOM API 
                           🢃    🢅  🢂 🢂 🢂 🢂 🢂 🢂 🢂 🢂   Set Timeout  🢂 🢂 🢂 🢂 🢂 🢂 🢂 🢂 🢂 🢂 
                           fn 🢅                              Set Interval                             🢃
                           fn                                   fetch() 🢂 🢂 🢂                    Register 
                           fn                                                  🢃(promise)        Call Back (CB)
                         Global 🢀 🢀 🢀 🢀 🢀 🢀 [[CB] [CB]] 🢀 🢀 🢀 🢀 🢀 🢀                        🢃
                           🢁                                                                           🢃
                           🢁                                                                           🢃
                           🢁                                                                           🢃
                           🢁                                                                           🢃
                           🢁  (High Priority)                                                          🢃
                 (Add to  🢀 🢀 🢀 🢀 🢀 🢀 🢀 🢀 🢀 [[CB]  [CB]] 🢀 🢀 🢀 🢀 🢀 🢀 🢀 🢀 🢀 🢀 🢀 🢀 🢀   
                Call Stack)                          (Task Queue)

                                           [EVENT LOOP]
*/ 