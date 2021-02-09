<script>
    import ioClient from 'socket.io-client'

    let io = ioClient('/dashboard', {
        query: {
            page: 'dashboard'
        }
    })

    let payments = []

    io.emit('refresh-processing-client-ask-server')

    io.on('refresh-processing-server-answer-client', (data) => {
        console.log(data)
    })
</script>

<div class="row mt-3">
    <h1 class="h3">Processing</h1>
    <div class="col-md">
        <div class="card mt-3">
            <div class="card-header">

            </div>
        </div>
    </div>
</div>
