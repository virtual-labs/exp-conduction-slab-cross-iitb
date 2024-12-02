let act2_div;
function activity2(btn) {
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
      <h3>Activity 2</h3>
      <h4>Tapered Rectangle Section </h4>
      <br>
      <br>
      <img src="./images/image2.png" style="width:50%">
      <br>
      <br>
      <p style="text-align:left">
         Heat is conducted through tapered rod of rectangular cross section as shown in figure. <br>
         The left end section is of height ${h1_cm_a2}cm & width of ${w1_cm_a2}cm is maintained at ${T1_a2}&deg;C & the right end section is of height ${h2_cm_a2}cm and width ${w2_cm_a2}cm is maintained at ${T2_a2}&deg;C. <br>
         The length of the rod is ${L_cm_a2}cm. <br>
         Find the heat transfer and temperature at a distance of ${x_cm_a2}cm from left end. <br>
         Take K = ${K_a2}W/m-K.
      </p>
      <br>
      <p class="fs-24px fb-600" style="text-align:left;">
         Area
      </p>
      <div id="act2-A-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$A_1 = h_1 \× w_1 =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-A1-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</sup></span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$A_2 = h_2 \× w_2 =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-A2-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_A();' id='act2-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function internal_calculation2() {
    h1_cm_a2 = parseFloat(random(4.0, 5.0).toFixed(1));
    h1_m_a2 = parseFloat((h1_cm_a2 / 100).toFixed(3));
    T1_a2 = random1(300, 401);
    L_cm_a2 = random1(25, 31);
    L_m_a2 = L_cm_a2 / 100;
    x_cm_a2 = random1(15, 21);
    x_m_a2 = x_cm_a2 / 100;
    A1_a2 = h1_m_a2 * w1_m_a2;
    A2_a2 = h2_m_a2 * w2_m_a2;
    Ag_a2 = (A1_a2 - A2_a2) / L_m_a2;
    Q_a2 = (K_a2 * (T1_a2 - T2_a2) * Ag_a2) / Math.log(A1_a2 / A2_a2);
    Ax_a2 = A1_a2 - Ag_a2 * x_m_a2;
    Tx_a2 = T1_a2 - (Q_a2 * Math.log(A1_a2 / Ax_a2)) / (K_a2 * Ag_a2);
    console.log('h1_cm_a2', h1_cm_a2);
    console.log('h1_m_a2', h1_m_a2);
    console.log('L_cm_a2', L_cm_a2);
    console.log('L_m_a2', L_m_a2);
    console.log('x_cm_a2', x_cm_a2);
    console.log('x_m_a2', x_m_a2);
    console.log('T1_a2', T1_a2);
    console.log('A1_a2', A1_a2);
    console.log('A2_a2', A2_a2);
    console.log('Ag_a2', Ag_a2);
    console.log('Q_a2', Q_a2);
    console.log('Ax_a2', Ax_a2);
    console.log('Tx_a2', Tx_a2);
}
function a2_verify_A() {
    let inp1 = (document.getElementById('act2-A1-inp'));
    let inp2 = (document.getElementById('act2-A2-inp'));
    console.log(A1_a2, A2_a2);
    if (!verify_values(parseFloat(inp1.value), A1_a2)) {
        inp1.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp1.style.border = '1px solid #ced4da';
        inp1.disabled = true;
    }
    if (!verify_values(parseFloat(inp2.value), A2_a2)) {
        inp2.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp2.style.border = '1px solid #ced4da';
        inp2.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-A-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A_1 = h_1 \× w_1 =  ${parseFloat(A1_a2.toFixed(6))} \\ m^2 $$
         $$A_2 = h_2 \× w_2 =  ${A2_a2} \\ m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Let A<sub>x</sub> be the area at a distance x from left end.
      </p>
      <div id="act2-ax-div">
         <div class="fs-16px" style="color:red;">
            Note: enter value till 5 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$A_x = A_1 - \\frac{A_1 - A_2}{L}x = $$
            </div>
            <div class="row justify-content-center col-md-6" style="flex-wrap:nowrap; align-items:center;">
               <input type='text' style="margin:0 2%; width:40%" id='act2-ax-inp1' class='form-control fs-16px' /> 
               -
               <input type='text' style="margin:0 2%; width:40%" id='act2-ax-inp2' class='form-control fs-16px' />x
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_ax();' id='act2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_ax() {
    let inp1 = (document.getElementById('act2-ax-inp1'));
    let inp2 = (document.getElementById('act2-ax-inp2'));
    console.log(A1_a2, Ag_a2);
    if (!verify_values(parseFloat(inp1.value), A1_a2)) {
        inp1.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp1.style.border = '1px solid #ced4da';
        inp1.disabled = true;
    }
    if (!verify_values(parseFloat(inp2.value), Ag_a2)) {
        inp2.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp2.style.border = '1px solid #ced4da';
        inp2.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-ax-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A_x = A_1 - \\frac{A_1 - A_2}{L}x  = ${parseFloat(A1_a2.toFixed(5))} - ${parseFloat(Ag_a2.toFixed(5))}x $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
         <p class="fs-24px fb-600" style="text-align:left;">
            Using Fourier's law
         </p>
         <p>
            $$
               \\frac{Q}{A} = -K \\frac{dT}{dx}
            $$
            $$
               Q\∫_0^L{\\frac{dx}{A_1 - A_gx}} = - K \∫_{T_1}^{T_2}{dT}
            $$
         </p>
         <div id="act2-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Q =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-Q-inp' class='form-control fs-16px' /><span style="display:contents;">W</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_Q();' id='act2-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_Q() {
    let inp = (document.getElementById('act2-Q-inp'));
    console.log(Q_a2);
    if (!verify_values(parseFloat(inp.value), Q_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q =  ${parseFloat(Q_a2.toFixed(3))}\\ W $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Now at x = ${x_cm_a2}cm
      </p>
      <div id="act2-Ax-div">
         <div class="fs-16px" style="color:red;">
            Note: enter value till 5 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$A_x = A_1 - A_gx =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-Ax-inp' class='form-control fs-16px' /><span style="display:contents;">m<sup>2</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_Ax();' id='act2-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_Ax() {
    let inp = (document.getElementById('act2-Ax-inp'));
    console.log(Ax_a2);
    if (!verify_values(parseFloat(inp.value), Ax_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-Ax-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A_x = A_1 - A_gx =  ${parseFloat(Ax_a2.toFixed(5))}\\ m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p>
         $$
            Q = \\frac{K(T_1 - T_x)A_g}{ln\\left(\\frac{A_1}{A_x}\\right)}
         $$
      </p>
      <div id="act2-Tx-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$T_x = T_1 - \\frac{Qln\\left(\\frac{A_1}{A_2}\\right)}{KA_g} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-Tx-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;C</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_Tx();' id='act2-vf-btn5'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_Tx() {
    let inp = (document.getElementById('act2-Tx-inp'));
    console.log(Tx_a2);
    if (!verify_values(parseFloat(inp.value), Tx_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-Tx-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$T_x = T_1 - \\frac{Qln\\left(\\frac{A_1}{A_2}\\right)}{KA_g} =  ${parseFloat(Tx_a2.toFixed(3))}\°C $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity3(this);' id='act2-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map