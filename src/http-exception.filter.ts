import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    NotFoundException,
  } from '@nestjs/common';
  
  @Catch(NotFoundException)
  export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      // Handle your custom response here
      response.status(404).json({
        statusCode: 404,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: 'Not Found',
      });
    }
  }
  