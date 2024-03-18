
DELIMITER //

CREATE PROCEDURE SP_MensajeUsuarioFechaReciente(IN idusuario INT)
BEGIN
  SELECT * FROM `tMensaje` WHERE IdUsuario = idusuario ORDER BY Fecha DESC;
END //

DELIMITER ;

