$('.generator').on('click',function () {
    const processorId = $(this).closest('.processor').attr('id')
    const computerDataId = $(this).closest('.computer').data().id
    const busNumber = $(this).closest('.computer').find('.BUS').text()


    console.log(processorId)
    console.log({cmp_id:computerDataId})
    console.log(busNumber)


})

$('.validator').on('click',function () {
    const generatorText = $(this).closest('.ram').siblings('.processor').find('.generator').text()
    const mb = $(this).closest('.computer').find('.MB').text()
    const qrs = $(this).closest('.computer').find('.QR').text()


    console.log(generatorText)
    console.log(mb)
    console.log(qrs)


})
