$(".generator").on("click", function(){
    const genArr = []
    genArr.push({"processor ID" : $(this).closest("div").attr("id")})
    genArr.push({"computer data-id": $(this).closest(".computer").data().id})
    genArr.push({"BUS": $(this).closest(".computer").find(".BUS").text()})
    console.log(genArr)
})
$(".validator").on("click", function(){
    const valiArr= []
    valiArr.push({"Generator" : $(this).closest(".computer").find(".processor").find(".generator").text()})
    valiArr.push({"The MB" : $(this).closest(".computer").find(".MB").text()})
    valiArr.push({"QRs": $(this).closest(".computer").find(".processor").find(".QR").text()})
    console.log(valiArr)
})