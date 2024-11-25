let act3_div;
function activity3(btn) {
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act3-div'>
      <h3>Activity 3</h3>
      <h4>Tapered Conical Section</h4>
      <br>
      <img src="./images/image3.png" style="width:30%">
      <br>
      <br>
      <p style="text-align:left">
         The heat is conducted through tapered conical rod. The left end is located at x<sub>1</sub> = ${x1_mm_a3}mm and right end is located at x<sub>2</sub> = ${x2_mm_a3}mm. The diameter varies as
         $$
            D = 0.5\\sqrt{x}
         $$
         The left end is at temperature ${T1_a3}&deg;C and right end is at temperature ${T2_a3}&deg;C. <br>
         Take K = ${K_a3}W/m-K. <br>
         Find the heat transfer & temperature at x = ${x_mm_a3}mm.
      </p>
      <br>
      <p class="fs-24px fb-600" style="text-align:left;">
         Using Fourier's law
      </p>
      <p>
         $$\\frac{Q}{A} = -K \\frac{dT}{dx}  $$
         $$
            Q\\int_{x_1}^{x_2}\\frac{dx}{\\frac{\π}{4}(0.5\\sqrt{x})^2} = -K\\int_{T_1}^{T_2}dT
         $$
         $$
            Q\\int_{x_1}^{x_2}\\frac{dx}{0.196x} = -K \\int_{T_1}^{T_2}dT
         $$
         $$
            Q = \\frac{0.196K(T_1 - T_2)}{ln\\left(\\frac{x_2}{x_1}\\right)}
         $$
      </p>
      <div id="act3-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Q =   $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-Q-inp' class='form-control fs-16px' /><span style="display:contents;"> W</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_Q();' id='act3-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
    act3_div = document.getElementById('act3-div');
}
function internal_calculation3() {
    T1_a3 = random1(300, 401);
    x_mm_a3 = random1(50, 76);
    x_m_a3 = x_mm_a3 / 1000;
    Q_a3 = (0.196 * K_a3 * (T1_a3 - T2_a3)) / Math.log(x2_m_a3 / x1_m_a3);
    Tx_a3 = T1_a3 - (Q_a3 * Math.log(x_m_a3 / x1_m_a3)) / (0.196 * K_a3);
    console.log('T1_a3', T1_a3);
    console.log('T2_a3', T2_a3);
    console.log('x1_m_a3', x1_m_a3);
    console.log('x2_m_a3', x2_m_a3);
    console.log('x_m_a3', x_m_a3);
    console.log('Q_a3', Q_a3);
    console.log('Tx_a3', Tx_a3);
}
function a3_verify_Q() {
    let inp = (document.getElementById('act3-Q-inp'));
    console.log(Q_a3);
    if (!verify_values(parseFloat(inp.value), Q_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q =  ${parseFloat(Q_a3.toFixed(3))} \\ W $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         At x = ${x_mm_a3}mm = ${x_m_a3}m
      </p>
      <p>
         $$
            Q = \\frac{0.196K(T_1 - T_x)}{ln\\left(\\frac{x}{x_1}\\right)}
         $$
         $$
            T_x = T_1 - \\frac{Qln\\left(\\frac{x}{x_1}\\right)}{0.196K}
         $$
      </p>
      <div id="act3-Tx-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$T_x = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-Tx-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;C</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_Tx();' id='act3-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_Tx() {
    let inp = (document.getElementById('act3-Tx-inp'));
    console.log(Tx_a3);
    if (!verify_values(parseFloat(inp.value), Tx_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-Tx-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$T_x =  ${parseFloat(Tx_a3.toFixed(3))}\°C $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
         
         <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act3-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity3();
//# sourceMappingURL=activity3.js.map