let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Conduction (Heat & Mass Transfer): Slab with varying cross section</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <h4>Tapered Square Section</h4>
      <br>
      <br>
      <img src="./images/image1.png" style="width:40%">
      <br>
      <br>

      <p style="text-align:left">
         Heat is conducted through a uniform square section tapered rod. Left end side is ${S1_cm_a1}cm & right end side is ${S2_cm_a1}cm. <br>
         Then left end side is at temperature ${T1_a1}&deg;C & right end side is at temperature ${T2_a1}&deg;C.<br>
         The conductivity of material is ${K_a1}W/m-K. <br>
         Find the heat transfer and temperature at ${x_cm_a1}cm, if the length of the rod is ${L_cm_a1}cm.
      </p>
      <br>

      <p class="fs-24px fb-600" style="text-align:left;">
         Let the side of the cross section at x be S<sub>x</sub>
      </p>

      <div id="act1-Sx-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$S_x = S_1 + \\frac{S_2 - S_1}{L}x =  $$
            </div>
            <div class="row justify-content-center col-md-6" style="flex-wrap:nowrap; align-items:center;">
               <input type='text' style="margin:0 2%; width:40%" id='act1-Sx-inp1' class='form-control fs-16px' /> 
               +
               <input type='text' style="margin:0 2%; width:40%" id='act1-Sx-inp2' class='form-control fs-16px' />x
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_Sx();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    S1_cm_a1 = parseFloat(random(1.5, 2.2).toFixed(1));
    S2_cm_a1 = parseFloat(random(6.5, 7.2).toFixed(1));
    L_cm_a1 = random1(40, 46);
    x_cm_a1 = random1(15, 21);
    S1_m_a1 = parseFloat((S1_cm_a1 / 100).toFixed(3));
    S2_m_a1 = parseFloat((S2_cm_a1 / 100).toFixed(3));
    L_m_a1 = L_cm_a1 / 100;
    x_m_a1 = x_cm_a1 / 100;
    T1_a1 = random1(450, 500);
    K_a1 = 52;
    Sg_a1 = (S2_m_a1 - S1_m_a1) / L_m_a1;
    Q_a1 =
        (Sg_a1 * (T1_a1 - T2_a1) * K_a1) /
            (1 / S1_m_a1 - 1 / (Sg_a1 * L_m_a1 + S1_m_a1));
    Tx_a1 =
        (Q_a1 * (1 / S1_m_a1 - 1 / (Sg_a1 * x_m_a1 + S1_m_a1))) /
            (Sg_a1 * K_a1) +
            T1_a1;
    console.log('S1_cm_a1', S1_cm_a1);
    console.log('S1_m_a1', S1_m_a1);
    console.log('S2_cm_a1', S2_cm_a1);
    console.log('S2_m_a1', S2_m_a1);
    console.log('L_cm_a1', L_cm_a1);
    console.log('L_m_a1', L_m_a1);
    console.log('x_cm_a1', x_cm_a1);
    console.log('x_m_a1', x_m_a1);
    console.log('T1_a1', T1_a1);
    console.log('T2_a1', T2_a1);
    console.log('Sg_a1', Sg_a1);
    console.log('Q_a1', Q_a1);
    console.log('Tx_a1', Tx_a1);
}
function a1_verify_Sx() {
    let inp1 = (document.getElementById('act1-Sx-inp1'));
    let inp2 = (document.getElementById('act1-Sx-inp2'));
    console.log(S1_m_a1, Sg_a1);
    if (!verify_values(parseFloat(inp1.value), S1_m_a1)) {
        inp1.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp1.style.border = '1px solid #ced4da';
        inp1.disabled = true;
    }
    if (!verify_values(parseFloat(inp2.value), Sg_a1)) {
        inp2.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp2.style.border = '1px solid #ced4da';
        inp2.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Sx-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$S_x = S_1 + \\frac{S_2 - S_1}{L}x = ${S1_m_a1} + ${parseFloat(Sg_a1.toFixed(3))}x $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p>
         $$
            A = S_x^2 = (S_1 + S_gx)^2
         $$
      </p>
      <p class="fs-24px fb-600" style="text-align:left;">
         Now using Fourier's law
      </p>
      <p>
         $$
            \\frac{Q}{A} = - K \\frac{dT}{dx}
         $$
         $$
            Q\∫_0^L {\\frac{dx}{(S_1 + S_gx)^2}} = -K\∫_{T_1}^{T^2}{dT}
         $$
      </p>
      <div id="act1-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-1">
               $$Q = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Q-inp' class='form-control fs-16px' /><span style="display:contents;">W</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_Q();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_Q() {
    let inp = (document.getElementById('act1-Q-inp'));
    console.log(Q_a1);
    if (!verify_values(parseFloat(inp.value), Q_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q =  ${parseFloat(Q_a1.toFixed(3))} \\ W $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         at x = ${x_m_a1}m, T<sub>x</sub> = ?
      </p>
      <p>
         $$
            Q = \\frac{S_g(T_1 - T_x)K}{\\left[\\frac{1}{S_1} - \\frac{1}{S_gx + S_1}\\right]}
         $$
         $$
            T_x = T_1 + \\frac{Q\\left[\\frac{1}{S_1} - \\frac{1}{S_gx+S_1}\\right]}{S_gK}
         $$
      </p>
      <div id="act1-Tx-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-1">
               $$T_x = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Tx-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;C</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_Tx();' id='act1-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_Tx() {
    let inp = (document.getElementById('act1-Tx-inp'));
    console.log(Tx_a1);
    if (!verify_values(parseFloat(inp.value), Tx_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Tx-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$T_x =  ${parseFloat(Tx_a1.toFixed(3))} \°C $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity2(this);' id='act1-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map