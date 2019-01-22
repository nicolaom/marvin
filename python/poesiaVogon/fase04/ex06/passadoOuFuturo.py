def passadoOuFuturo (data):
    import datetime
    hoje = datetime.datetime(2015, 10, 21)
    if data < hoje:
        return "Passado"
    else:
        return "Futuro"

