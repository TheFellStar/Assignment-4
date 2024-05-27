class Cube{
    constructor(){
        this.type='cube';
        this.color = [1.0,1.0,1.0,1.0];
        this.matrix = new Matrix4();
        this.normalMatrix = new Matrix4();
        this.textureNum = -2;
    }

    render(){
        var rgba = this.color;

        gl.uniform1i(u_whichTexture, this.textureNum);

        gl.uniform4f(u_FragColor, rgba [0], rgba[1], rgba[2], rgba[3]);

        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

        gl.uniformMatrix4fv(u_NormalMatrix, false, this.normalMatrix.elements);

        //front of cube
        drawTriangle3DUVNormal([0,0,0,  1,1,0,  1,0,0], [0,0, 1,1, 1,0], [0,0,-1, 0,0,-1, 0,0,-1]); //correct
        drawTriangle3DUVNormal([0,0,0,  0,1,0,  1,1,0], [0,0, 0,1, 1,1], [0,0,-1, 0,0,-1, 0,0,-1]); //correct

        //back of cube
        //gl.uniform4f(u_FragColor, rgba[0]*.5, rgba[1]*.5, rgba[2]*.5, rgba[3]*.5);
        drawTriangle3DUVNormal([0,0,1,  1,1,1,  1,0,1], [0,0, 0,1, 1,1], [0,0,1, 0,0,1, 0,0,1]);
        drawTriangle3DUVNormal([0,0,1,  0,1,1,  1,1,1], [0,0, 1,1, 1,0], [0,0,1, 0,0,1, 0,0,1]);

        //gl.uniform4f(u_FragColor, rgba[0]*.9, rgba[1]*.9, rgba[2]*.9, rgba[3]);

        //top of cube
        drawTriangle3DUVNormal([0,1,0,  0,1,1,  1,1,1], [0,0, 0,1, 1,1], [0,1,0, 0,1,0, 0,1,0]); //correct
        drawTriangle3DUVNormal([0,1,0,  1,1,1,  1,1,0], [0,0, 1,1, 1,0], [0,1,0, 0,1,0, 0,1,0]);

        //bottom of cube
        //gl.uniform4f(u_FragColor, rgba[0]*.6, rgba[1]*.6, rgba[2]*.6, rgba[3]);
        drawTriangle3DUVNormal([0,0,0,  0,0,1,  1,0,1], [0,0, 0,1, 1,1], [0,-1,0, 0,-1,0, 0,-1,0]);
        drawTriangle3DUVNormal([0,0,0,  1,0,1,  1,0,0], [0,0, 1,1, 1,0], [0,-1,0, 0,-1,0, 0,-1,0]);

        //gl.uniform4f(u_FragColor, rgba[0]*.7, rgba[1]*.7, rgba[2]*.7, rgba[3]);
        //left side of cube
        drawTriangle3DUVNormal([0,1,0,  0,1,1,  0,0,0], [0,0, 0,1, 1,1], [-1,0,0, -1,0,0, -1,0,0]);
        drawTriangle3DUVNormal([0,0,0,  0,1,1,  0,0,1], [0,0, 1,1, 1,0], [-1,0,0, -1,0,0, -1,0,0]);

        //gl.uniform4f(u_FragColor, rgba[0]*.8, rgba[1]*.8, rgba[2]*.8, rgba[3]);
        //right side of cube
        drawTriangle3DUVNormal([1,1,0,  1,1,1,  1,0,0], [0,0, 0,1, 1,1], [1,0,0, 1,0,0, 1,0,0]);
        drawTriangle3DUVNormal([1,0,0,  1,1,1,  1,0,1], [0,0, 1,1, 1,0], [1,0,0, 1,0,0, 1,0,0]);
    }
    renderfast(){
        var rgba = this.color;

        gl.uniform4f(u_FragColor, rgba[0],rgba[1],rgba[2],rgba[3]);

        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

        var allverts=[];
        //front
        allverts=allverts.concat([0,0,0, 1,1,0, 1,0,0]);
        allverts=allverts.concat([0,0,0, 0,1,0, 1,1,0]);

        //top
        allverts=allverts.concat([0,1,0, 0,1,1, 1,1,1]);
        allverts=allverts.concat([0,1,0, 1,1,1, 1,1,0]);

        //right
        allverts=allverts.concat([1,1,0, 1,1,1, 1,0,0]);
        allverts=allverts.concat([1,0,0, 1,1,1, 1,0,1]);

        //left
        allverts=allverts.concat([0,1,0, 0,1,1, 0,0,0]);
        allverts=allverts.concat([0,0,0, 0,1,1, 0,0,1]);

        //bottom
        allverts=allverts.concat([0,0,0, 0,0,1, 1,0,1]);
        allverts=allverts.concat([0,0,0, 1,0,1, 1,0,0]);

        //back
        allverts=allverts.concat([0,0,1, 1,1,1, 1,0,1]);
        allverts=allverts.concat([0,0,1, 0,1,1, 1,1,1]);
        drawTriangle3D(allverts);
    }
}