$(document).ready(function() {

  const cpuNo = $("#cpuNo");
  const ramSize = $("#ramSize");
  const storageSize = $("#storageSize");
  const ipNo = $("#ipNo");
  const nas = $("#nas");
  const cent = $("#osRadio1");
  const windows = $("#osRadio2");

  $("#cpuNoText").text(cpuNo.val());
  $("#ramSizeText").text(ramSize.val() + " GB");
  $("#storageSizeText").text(storageSize.val() + " GB");
  $("#ipNoText").text(ipNo.val());


  function quotaUpdate(){
    const baseQuota = 80;
    const cpuQuota = (cpuNo.val() - 1) * 20;
    const ramQuota = (ramSize.val() - 1) * 3;
    const storageQuota = (storageSize.val() - 50) * 0.35;
    const ipQuota = (ipNo.val() - 1) * 5;
    var newQuota = baseQuota + cpuQuota + ramQuota + storageQuota + ipQuota;
    if (cpuQuota>0) {
      $("#cpuCaption").text("+20 EUR/mese per unità");
      $("#addCpu").text("+ " + (cpuNo.val() - 1) + " CPU (" + cpuQuota + " EUR)");
      }
      else {
        $("#cpuCaption").text("Incluso");
        $("#addCpu").text(null);
      };
    if (ramQuota>0) {
      $("#ramCaption").text("+3 EUR/mese per GB");
      $("#addRam").text("+ " + (ramSize.val() - 1) + " GB RAM (" + ramQuota + " EUR)");
      }
      else {
        $("#ramCaption").text("Incluso");
        $("#addRam").text(null);
      };
    if (storageQuota>0) {
      $("#storageCaption").text("+3.5 EUR/mese per 10 GB");
      $("#addStorage").text("+ " + (storageSize.val() - 50) + " GB Storage (" + storageQuota.toFixed(1) + " EUR)");
      }
      else {
        $("#storageCaption").text("Incluso");
        $("#addStorage").text(null);
      };
    if (ipQuota>0) {
      $("#ipCaption").text("+5 EUR/mese per IP");
      $("#addIp").text("+ " + (ipNo.val() - 1) + " IP (" + ipQuota + " EUR)");
      }
      else {
        $("#ipCaption").text("Incluso");
        $("#addIp").text(null);
      };
    if (nas.is(":checked")) {
      newQuota = newQuota + 27;
      $("#nasCaption").text("+27 EUR/mese");
      $("#addNas").text("NAS: sì (" + 27 + " EUR)");
      }
      else {
        $("#nasCaption").text("Incluso");
        $("#addNas").text(null);
      };
    if (windows.is(":checked")) {
      newQuota = newQuota + 10;
      $("#osCaption").text("+10 EUR/mese (Windows 2016)");
      $("#addWindows").text("OS: Windows 2016 (" + 10 + " EUR)");
      }
      else {
        $("#osCaption").text("Incluso");
        $("#addWindows").text(null);
      };
    if (newQuota>80) $("#add").text("Risorse aggiunte:")
      else $("#add").text("(Prezzo base)");
    $("#amount").text("Totale: " + newQuota + " EUR/mese");
  };

  quotaUpdate();

  $(".form-range").change(function() {
    $("#" + event.target.id + "Text").text($("#" + event.target.id).val());
    quotaUpdate();
  });

  nas.change(function() {
    quotaUpdate();
  });

  cent.change(function() {
    quotaUpdate();
  });

  windows.change(function() {
    quotaUpdate();
  });
});
