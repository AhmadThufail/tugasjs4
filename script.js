let frm = document.getElementById('online');
let jabatanPilihan = ["manajer", "asisten manajer", "staff"];
let statuspegawai = ["menikah", "belum menikah"];
let pilihjabatan = `<option value""> Pilihan jabatan </option>`;
let pilihstatus =  `<option value""> Pilihan status </option>`;

for (let p in jabatanPilihan){
    pilihjabatan += `<option value="${jabatanPilihan[p]}">${jabatanPilihan[p]} </option>`;
}
for (let a in statuspegawai ){
    pilihstatus += `<option value="${statuspegawai[a]}">${statuspegawai[a]} </option>`;
}

frm.jabatan.innerHTML = pilihjabatan;
frm.status.innerHTML = pilihstatus;

function kondisi(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;
    let gajipokok ;

    if(jabatan == "manajer"){
        gajipokok = 15000000;
    } else if(jabatan == "asisten manajer"){
        gajipokok = 1000000;
    } else if(jabatan == "staff"){
        gajipokok = 5000000;
    } else {
        gajipokok=0;
    }

    let tunjanganJabatan = 0.15 * gajipokok;
    let bpjs = 0.1 * gajipokok;
    //ternary
    let tunjanganKeluarga = (status == "menikah" )? 0.2 * gajipokok : 0;
    let totalGaji = gajipokok + tunjanganJabatan + bpjs + tunjanganKeluarga;
    let totalGajiSemua =totalGaji;


    Swal.fire({
        
        title: "hasil",
        icon: "success",
        html: 
        `<table border="1" align="center" cellpadding="0" width="100%">
        <thead>
            <tr>
                <th>Nama Pegawai</th>
                <th>Jabatan</th>
                <th>Status</th>
                <th>Gaji Pokok</th>
                <th>Tunjangan Jabatan</th>
                <th>BPJS</th>
                <th>Tunjangan Keluarga</th>
               
            </tr>
        <tbody>
            <tr>
                <td> ${nama}</td>
                <td> ${jabatan}</td>
                <td> ${status}</td>
                <td> ${gajipokok}</td>
                <td> ${tunjanganJabatan}</td>
                <td> ${bpjs}</td>
                <td> ${tunjanganKeluarga}</td>
                
            </tr>
        </tbody>
        <tfoot>
        <th> total gaji</th>
        <th colspan="6">
        ${totalGaji}
        </th>
        </tfoot>
        </thead>`
        
     });
     
    
}