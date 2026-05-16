null;
var l;
l || (l = typeof Module !== 'undefined' ? Module : {});
(function(F) {
    function Rb(a, b, c, d) {
        a || (a = this);
        this.parent = a;
        this.Og = a.Og;
        this.ui = null;
        this.id = g.am++;
        this.name = b;
        this.mode = c;
        this.Hg = {};
        this.Kg = {};
        this.yi = d
    }
    function R(a) {
        return "string" != typeof a ? 0 : xa(a)
    }
    function sd() {
        window.onbeforeunload = null;
        location.reload(!0)
    }
    function Sb(a, b) {
        mb += b;
        10485760 < mb && (mb = 0,
        Tb = new TextDecoder("utf8"));
        return Tb.decode(O.subarray(a, a + b))
    }
    function td(a, b) {
        function c() {
            return O[a++]
        }
        function d() {
            let I = O[a] | O[a + 1] << 8 | O[a + 2] << 16 | O[a + 3] << 24;
            a += 4;
            return I
        }
        function e() {
            let I = v.getInt32(a - q, !0);
            a += 4;
            return I
        }
        function f() {
            let I = v.getFloat32(a - q, !0);
            a += 4;
            return I
        }
        function h() {
            let I = a;
            for (; 0 != O[I]; )
                I++;
            let P = Sb(a, I - a);
            a = I + 1;
            return P
        }
        function n(I) {
            let P = a;
            a += I;
            return new Uint8Array(O.buffer,P,I)
        }
        const q = a
          , u = a + b
          , v = new DataView(O.buffer,a,b);
        let A = -1;
        for (; !(a >= u); ) {
            let I = c();
            switch (I) {
            case 0:
                let P = d()
                  , la = d()
                  , C = d()
                  , Q = c();
                if (Q & 4)
                    var D = new OffscreenCanvas(la,C);
                else
                    D = document.createElement("canvas"),
                    D.width = la,
                    D.height = C;
                var t = D.getContext("2d", {
                    storage: Q & 1 ? "discardable" : "persistent",
                    alpha: !!(Q & 2),
                    willReadFrequently: !1
                });
                x[P] = t;
                D.oncontextlost = function() {
                    Ta();
                    x[P] == t && Ub(P)
                }
                ;
                D.oncontextrestored = function() {
                    Ta();
                    x[P] == t && Vb(P)
                }
                ;
                break;
            case 1:
                let aa = d();
                D = x[aa].canvas;
                delete D.oncontextlost;
                delete D.oncontextrestored;
                D.width = 0;
                D.height = 0;
                x[aa] = null;
                break;
            case 2:
                let ia = d()
                  , U = c();
                x[ia].direction = U ? "ltr" : "rtl";
                break;
            case 3:
                x[d()].save();
                break;
            case 4:
                x[d()].restore();
                break;
            case 5:
                x[d()].setTransform(1, 0, 0, 1, 0, 0);
                break;
            case 6:
                let nb = d()
                  , sa = f()
                  , ud = f()
                  , vd = f()
                  , wd = f()
                  , xd = f()
                  , yd = f();
                x[nb].setTransform(sa, ud, vd, wd, xd, yd);
                break;
            case 7:
                let zd = d()
                  , Ad = d()
                  , Bd = d();
                D = x[zd].canvas;
                D.width = Ad;
                D.height = Bd;
                break;
            case 8:
                x[d()].fill();
                break;
            case 9:
                x[d()].stroke();
                break;
            case 10:
                let Cd = d()
                  , Dd = d()
                  , Ed = c();
                x[Cd].fill(ja[Dd], Ed & 1 ? "nonzero" : "evenodd");
                break;
            case 11:
                let Fd = d()
                  , Gd = d();
                x[Fd].stroke(ja[Gd]);
                break;
            case 12:
                x[d()].clip();
                break;
            case 13:
                let Hd = d()
                  , Id = d();
                x[Hd].clip(ja[Id]);
                break;
            case 14:
                x[d()].beginPath();
                break;
            case 15:
                x[d()].closePath();
                break;
            case 16:
                let Jd = d()
                  , Kd = f()
                  , Ld = f()
                  , Md = f()
                  , Nd = f();
                x[Jd].rect(Kd, Ld, Md, Nd);
                break;
            case 17:
                let Od = d()
                  , Wb = x[Od]
                  , Xb = Wb.canvas;
                Wb.clearRect(0, 0, Xb.width, Xb.height);
                break;
            case 18:
                let Pd = d()
                  , Qd = f()
                  , Rd = f()
                  , Sd = f()
                  , Td = f();
                x[Pd].clearRect(Qd, Rd, Sd, Td);
                break;
            case 19:
                let Ud = d()
                  , Vd = f()
                  , Wd = f()
                  , Xd = f()
                  , Yd = f();
                x[Ud].fillRect(Vd, Wd, Xd, Yd);
                break;
            case 20:
                let Zd = d()
                  , $d = f()
                  , ae = f()
                  , be = f()
                  , ce = f();
                x[Zd].strokeRect($d, ae, be, ce);
                break;
            case 21:
                let de = d()
                  , Yb = c()
                  , Zb = c()
                  , $b = c();
                x[de].fillStyle = String.fromCharCode(35, X(Yb >> 4 & 15), X(Yb & 15), X(Zb >> 4 & 15), X(Zb & 15), X($b >> 4 & 15), X($b & 15));
                break;
            case 22:
                let ee = d()
                  , ac = c()
                  , bc = c()
                  , cc = c();
                x[ee].strokeStyle = String.fromCharCode(35, X(ac >> 4 & 15), X(ac & 15), X(bc >> 4 & 15), X(bc & 15), X(cc >> 4 & 15), X(cc & 15));
                break;
            case 23:
                let fe = d()
                  , ge = d();
                x[fe].fillStyle = qa[ge];
                break;
            case 24:
                let he = d()
                  , ie = d();
                x[he].strokeStyle = qa[ie];
                break;
            case 25:
                let je = d()
                  , ke = f();
                x[je].globalAlpha = ke;
                break;
            case 26:
                let le = d()
                  , me = f()
                  , ne = f();
                x[le].moveTo(me, ne);
                break;
            case 27:
                let oe = d()
                  , pe = f()
                  , qe = f();
                x[oe].lineTo(pe, qe);
                break;
            case 28:
                let re = d()
                  , se = f()
                  , te = f()
                  , ue = f()
                  , ve = f();
                x[re].quadraticCurveTo(se, te, ue, ve);
                break;
            case 29:
                let we = d()
                  , xe = f()
                  , ye = f()
                  , ze = f()
                  , Ae = f()
                  , Be = f()
                  , Ce = f();
                x[we].bezierCurveTo(xe, ye, ze, Ae, Be, Ce);
                break;
            case 30:
                let De = d()
                  , Ee = f()
                  , Fe = f()
                  , Ge = f()
                  , He = f()
                  , Ie = f()
                  , Je = f()
                  , Ke = f()
                  , Le = f();
                Ea[0] = Ie;
                Ea[1] = Je;
                Ea[2] = Ke;
                Ea[3] = Le;
                x[De].roundRect(Ee, Fe, Ge, He, Ea);
                break;
            case 31:
                let Me = d()
                  , Ne = f()
                  , Oe = f()
                  , Pe = f()
                  , Qe = f()
                  , Re = f()
                  , Se = c();
                x[Me].arc(Ne, Oe, Pe, Qe, Re, !!(Se & 1));
                break;
            case 32:
                let Te = d()
                  , Ue = f()
                  , Ve = f()
                  , We = f()
                  , Xe = f()
                  , Ye = f()
                  , Ze = f()
                  , $e = f()
                  , af = c();
                x[Te].ellipse(Ue, Ve, We, Xe, Ye, Ze, $e, !!(af & 1));
                break;
            case 33:
                let bf = d()
                  , cf = f();
                x[bf].lineWidth = cf;
                break;
            case 34:
                let df = d()
                  , ef = d()
                  , ff = f()
                  , gf = f();
                x[df].drawImage(x[ef].canvas, ff, gf);
                break;
            case 35:
                let hf = d()
                  , jf = d()
                  , kf = f()
                  , lf = f()
                  , mf = f()
                  , nf = f();
                x[hf].drawImage(x[jf].canvas, kf, lf, mf, nf);
                break;
            case 36:
                let of = d()
                  , pf = d()
                  , qf = f()
                  , rf = f()
                  , sf = f()
                  , tf = f()
                  , uf = f()
                  , vf = f()
                  , wf = f()
                  , xf = f();
                x[of].drawImage(x[pf].canvas, qf, rf, sf, tf, uf, vf, wf, xf);
                break;
            case 37:
                let yf = d()
                  , zf = d()
                  , Af = f()
                  , Bf = f();
                x[yf].drawImage(ta[zf], Af, Bf);
                break;
            case 38:
                let Cf = d()
                  , Df = d()
                  , Ef = f()
                  , Ff = f()
                  , Gf = f()
                  , Hf = f();
                x[Cf].drawImage(ta[Df], Ef, Ff, Gf, Hf);
                break;
            case 39:
                let If = d()
                  , Jf = d()
                  , Kf = f()
                  , Lf = f()
                  , Mf = f()
                  , Nf = f()
                  , Of = f()
                  , Pf = f()
                  , Qf = f()
                  , Rf = f();
                x[If].drawImage(ta[Jf], Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf);
                break;
            case 40:
                let Sf = d()
                  , Tf = f()
                  , Uf = f()
                  , Vf = h();
                x[Sf].fillText(Vf, Tf, Uf);
                break;
            case 41:
                let Wf = d()
                  , Xf = f()
                  , Yf = f()
                  , Zf = h();
                x[Wf].strokeText(Zf, Xf, Yf);
                break;
            case 42:
                let $f = d()
                  , ag = f();
                x[$f].font = "700 " + (2048 * ag | 0) / 2048 + "px Game, Microsoft YaHei, sans-serif";
                break;
            case 43:
                let ob = d();
                switch (c()) {
                default:
                case 0:
                    x[ob].textAlign = "left";
                    break;
                case 1:
                    x[ob].textAlign = "center";
                    break;
                case 2:
                    x[ob].textAlign = "right"
                }
                break;
            case 44:
                let pb = d();
                switch (c()) {
                case 0:
                    x[pb].lineCap = "butt";
                    break;
                case 1:
                    x[pb].lineCap = "round";
                    break;
                case 2:
                    x[pb].lineCap = "square"
                }
                break;
            case 45:
                let qb = d();
                switch (c()) {
                case 0:
                    x[qb].lineJoin = "miter";
                    break;
                case 1:
                    x[qb].lineJoin = "round";
                    break;
                case 2:
                    x[qb].lineJoin = "bevel"
                }
                break;
            case 46:
                let bg = d()
                  , cg = f();
                x[bg].miterLimit = cg;
                break;
            case 47:
                let dg = d()
                  , eg = f()
                  , fg = f();
                rb[0] = eg;
                rb[1] = fg;
                x[dg].setLineDash(rb);
                break;
            case 48:
                let gg = d();
                x[gg].setLineDash(hg);
                break;
            case 49:
                let ig = d()
                  , jg = f();
                x[ig].lineDashOffset = jg;
                break;
            case 50:
                let ca = d();
                switch (c()) {
                case 0:
                    x[ca].globalCompositeOperation = "source-over";
                    break;
                case 1:
                    x[ca].globalCompositeOperation = "source-in";
                    break;
                case 2:
                    x[ca].globalCompositeOperation = "source-atop";
                    break;
                case 3:
                    x[ca].globalCompositeOperation = "destination-over";
                    break;
                case 4:
                    x[ca].globalCompositeOperation = "destination-in";
                    break;
                case 5:
                    x[ca].globalCompositeOperation = "destination-out";
                    break;
                case 6:
                    x[ca].globalCompositeOperation = "screen";
                    break;
                case 7:
                    x[ca].globalCompositeOperation = "copy";
                    break;
                case 8:
                    x[ca].globalCompositeOperation = "difference";
                    break;
                case 9:
                    x[ca].globalCompositeOperation = "lighter";
                    break;
                case 10:
                    x[ca].globalCompositeOperation = "multiply";
                    break;
                case 11:
                    x[ca].globalCompositeOperation = "saturation";
                    break;
                case 12:
                    x[ca].globalCompositeOperation = "hue";
                    break;
                case 13:
                    x[ca].globalCompositeOperation = "overlay";
                    break;
                case 14:
                    x[ca].globalCompositeOperation = "darken";
                    break;
                case 15:
                    x[ca].globalCompositeOperation = "hard-light";
                    break;
                case 16:
                    x[ca].globalCompositeOperation = "soft-light"
                }
                break;
            case 51:
                let kg = d()
                  , dc = d()
                  , ec = d()
                  , lg = e()
                  , mg = e()
                  , ng = a
                  , fc = 4 * dc * ec;
                a += fc;
                x[kg].putImageData(new ImageData(new Uint8ClampedArray(Z.buffer,ng,fc),dc,ec), lg, mg);
                break;
            case 52:
                let og = d()
                  , pg = c();
                x[og].imageSmoothingEnabled = !!pg;
                break;
            case 53:
                let qg = d()
                  , gc = h()
                  , rg = c()
                  , hc = document.getElementById(gc);
                if (!hc)
                    throw Error("CanvasAllocFromElement: bad id " + gc);
                x[qg] = hc.getContext("2d", {
                    alpha: !!rg,
                    willReadFrequently: !1
                });
                break;
            case 54:
                d();
                let sg = d()
                  , tg = d();
                x[sg].createPattern(x[tg].canvas, null);
                break;
            case 55:
                d();
                break;
            case 56:
                let ug = d()
                  , vg = d()
                  , wg = f()
                  , xg = f()
                  , yg = f()
                  , zg = f();
                qa[ug] = x[vg].createLinearGradient(wg, xg, yg, zg);
                break;
            case 57:
                let Ag = d()
                  , Bg = d()
                  , Cg = f()
                  , Dg = f()
                  , Eg = f()
                  , Fg = f()
                  , Gg = f()
                  , Hg = f();
                qa[Ag] = x[Bg].createRadialGradient(Cg, Dg, Eg, Fg, Gg, Hg);
                break;
            case 58:
                let Ig = d()
                  , Jg = d()
                  , Kg = f()
                  , Lg = f()
                  , Mg = f();
                qa[Ig] = x[Jg].createConicGradient(Kg, Lg, Mg);
                break;
            case 59:
                let ic = d()
                  , jc = f()
                  , sb = c()
                  , tb = c()
                  , ub = c()
                  , kc = c();
                255 == kc ? qa[ic].addColorStop(jc, String.fromCharCode(35, X(sb >> 4 & 15), X(sb & 15), X(tb >> 4 & 15), X(tb & 15), X(ub >> 4 & 15), X(ub & 15))) : qa[ic].addColorStop(jc, "rgba(" + sb + "," + tb + "," + ub + "," + kc / 255 + ")");
                break;
            case 60:
                qa[d()] = null;
                break;
            case 61:
                ja[d()] = new Path2D;
                break;
            case 62:
                ja[d()] = null;
                break;
            case 63:
                let Ng = d()
                  , Og = f()
                  , Pg = f();
                ja[Ng].moveTo(Og, Pg);
                break;
            case 64:
                let Qg = d()
                  , Rg = f()
                  , Sg = f();
                ja[Qg].lineTo(Rg, Sg);
                break;
            case 65:
                let Tg = d()
                  , Ug = f()
                  , Vg = f()
                  , Wg = f()
                  , Xg = f();
                ja[Tg].rect(Ug, Vg, Wg, Xg);
                break;
            case 66:
                let Yg = d()
                  , Zg = f()
                  , $g = f()
                  , ah = f()
                  , bh = f()
                  , ch = f()
                  , dh = c();
                ja[Yg].arc(Zg, $g, ah, bh, ch, !!(dh & 1));
                break;
            case 67:
                let eh = d()
                  , fh = f()
                  , gh = f()
                  , hh = f()
                  , ih = f()
                  , jh = f()
                  , kh = f()
                  , lh = f()
                  , mh = c();
                ja[eh].ellipse(fh, gh, hh, ih, jh, kh, lh, !!(mh & 1));
                break;
            case 68:
                let nh = d()
                  , oh = f()
                  , ph = f()
                  , qh = f()
                  , rh = f();
                ja[nh].quadraticCurveTo(oh, ph, qh, rh);
                break;
            case 69:
                let sh = d()
                  , th = f()
                  , uh = f()
                  , vh = f()
                  , wh = f()
                  , xh = f()
                  , yh = f();
                ja[sh].bezierCurveTo(th, uh, vh, wh, xh, yh);
                break;
            case 70:
                let zh = d();
                ja[zh].closePath();
                break;
            case 71:
                let vb = d()
                  , wb = h()
                  , Ah = d()
                  , lc = n(Ah);
                var E = new Image;
                E.onload = function() {
                    Ta();
                    ta[vb] == E && mc(vb, E.width, E.height)
                }
                ;
                E.onerror = function() {
                    console.error("Failed to load image " + wb)
                }
                ;
                if (0 == wb.indexOf("static/")) {
                    var L = "application/octet-binary";
                    60 == lc[0] && (L = "image/svg+xml");
                    E.src = window.URL.createObjectURL(new Blob([lc],{
                        type: L
                    }))
                } else
                    E.src = wb;
                ta[vb] = E;
                break;
            case 72:
                let nc = d()
                  , Ua = ta[nc];
                0 == Ua.src.indexOf("blob:") && window.URL.revokeObjectURL(Ua.src);
                Ua.onload = null;
                Ua.onerror = null;
                ta[nc] = null;
                break;
            default:
                throw Error("Bad cmd " + I + ", last cmd: " + A + ". Data: " + Bh(O.slice(Math.max(q, a - 64), u)));
            }
            A = I
        }
    }
    function Bh(a) {
        let b = "";
        for (let c = 0; c < a.length; c++) {
            let d = a[c];
            0 < c && (b += " ");
            b += String.fromCharCode(X(d >> 4 & 15), X(d & 15))
        }
        return b
    }
    function X(a) {
        switch (a) {
        case 0:
            return 48;
        case 1:
            return 49;
        case 2:
            return 50;
        case 3:
            return 51;
        case 4:
            return 52;
        case 5:
            return 53;
        case 6:
            return 54;
        case 7:
            return 55;
        case 8:
            return 56;
        case 9:
            return 57;
        case 10:
            return 65;
        case 11:
            return 66;
        case 12:
            return 67;
        case 13:
            return 68;
        case 14:
            return 69;
        case 15:
            return 70;
        default:
            return 63
        }
    }
    function oc(a, b) {
        Va.font = "700 " + (2048 * b | 0) / 2048 + "px Game, Microsoft YaHei, sans-serif";
        return Va.measureText(a)
    }
    function Ch(a) {
        return l.locateFile ? l.locateFile(a, ua) : ua + a
    }
    function ya(a, b, c) {
        var d = b + c;
        for (c = b; a[c] && !(c >= d); )
            ++c;
        if (16 < c - b && a.buffer && pc)
            return pc.decode(a.subarray(b, c));
        for (d = ""; b < c; ) {
            var e = a[b++];
            if (e & 128) {
                var f = a[b++] & 63;
                if (192 == (e & 224))
                    d += String.fromCharCode((e & 31) << 6 | f);
                else {
                    var h = a[b++] & 63;
                    e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | h : (e & 7) << 18 | f << 12 | h << 6 | a[b++] & 63;
                    65536 > e ? d += String.fromCharCode(e) : (e -= 65536,
                    d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
                }
            } else
                d += String.fromCharCode(e)
        }
        return d
    }
    function z(a, b) {
        return a ? ya(O, a, b) : ""
    }
    function Fa(a, b, c, d) {
        if (!(0 < d))
            return 0;
        var e = c;
        d = c + d - 1;
        for (var f = 0; f < a.length; ++f) {
            var h = a.charCodeAt(f);
            if (55296 <= h && 57343 >= h) {
                var n = a.charCodeAt(++f);
                h = 65536 + ((h & 1023) << 10) | n & 1023
            }
            if (127 >= h) {
                if (c >= d)
                    break;
                b[c++] = h
            } else {
                if (2047 >= h) {
                    if (c + 1 >= d)
                        break;
                    b[c++] = 192 | h >> 6
                } else {
                    if (65535 >= h) {
                        if (c + 2 >= d)
                            break;
                        b[c++] = 224 | h >> 12
                    } else {
                        if (c + 3 >= d)
                            break;
                        b[c++] = 240 | h >> 18;
                        b[c++] = 128 | h >> 12 & 63
                    }
                    b[c++] = 128 | h >> 6 & 63
                }
                b[c++] = 128 | h & 63
            }
        }
        b[c] = 0;
        return c - e
    }
    function N(a, b, c) {
        return Fa(a, O, b, c)
    }
    function Ga(a) {
        for (var b = 0, c = 0; c < a.length; ++c) {
            var d = a.charCodeAt(c);
            127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4,
            ++c) : b += 3
        }
        return b
    }
    function Wa() {
        va++;
        l.monitorRunDependencies && l.monitorRunDependencies(va)
    }
    function za() {
        va--;
        l.monitorRunDependencies && l.monitorRunDependencies(va);
        if (0 == va && (null !== xb && (clearInterval(xb),
        xb = null),
        Ha)) {
            var a = Ha;
            Ha = null;
            a()
        }
    }
    function fa(a) {
        if (l.onAbort)
            l.onAbort(a);
        a = "Aborted(" + a + ")";
        ea(a);
        Aa = !0;
        Xa = 1;
        throw new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
    }
    function qc(a) {
        return a.startsWith("data:application/octet-stream;base64,")
    }
    function rc(a) {
        try {
            if (a == ma && Ia)
                return new Uint8Array(Ia);
            if (sc)
                return sc(a);
            throw "both async and sync fetching of the wasm failed";
        } catch (b) {
            fa(b)
        }
    }
    function Dh() {
        return Ia || "function" != typeof fetch ? Promise.resolve().then(function() {
            return rc(ma)
        }) : fetch(ma, {
            credentials: "same-origin"
        }).then(function(a) {
            if (!a.ok)
                throw "failed to load wasm binary file at '" + ma + "'";
            return a.arrayBuffer()
        }).catch(function() {
            return rc(ma)
        })
    }
    function tc(a) {
        this.name = "ExitStatus";
        this.message = "Program terminated with exit(" + a + ")";
        this.status = a
    }
    function Eh(a, b, c) {
        a.addEventListener(b, c, {
            once: !0
        })
    }
    function Fh(a, b) {
        b || (b = [document, document.getElementById("canvas")]);
        ["keydown", "mousedown", "touchstart"].forEach(function(c) {
            b.forEach(function(d) {
                d && Eh(d, c, () => {
                    "suspended" === a.state && a.resume()
                }
                )
            })
        })
    }
    function Ya(a) {
        for (; 0 < a.length; )
            a.shift()(l)
    }
    function uc(a) {
        var b = vc();
        a = a();
        wc(b);
        return a
    }
    function V(a) {
        var b = Za[a];
        b || (a >= Za.length && (Za.length = a + 1),
        Za[a] = b = xc.get(a));
        return b
    }
    function yb(a, b, c) {
        a.includes("j") ? (a = l["dynCall_" + a],
        b = c && c.length ? a.apply(null, [b].concat(c)) : a.call(null, b)) : b = V(b).apply(null, c);
        return b
    }
    function yc(a) {
        if (a instanceof tc || "unwind" == a)
            return Xa;
        zb(1, a)
    }
    function zc(a, b, c="i8") {
        c.endsWith("*") && (c = "*");
        switch (c) {
        case "i1":
            Z[a >> 0] = b;
            break;
        case "i8":
            Z[a >> 0] = b;
            break;
        case "i16":
            Ba[a >> 1] = b;
            break;
        case "i32":
            m[a >> 2] = b;
            break;
        case "i64":
            W = [b >>> 0, (G = b,
            1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
            m[a >> 2] = W[0];
            m[a + 4 >> 2] = W[1];
            break;
        case "float":
            J[a >> 2] = b;
            break;
        case "double":
            ha[a >> 3] = b;
            break;
        case "*":
            B[a >> 2] = b;
            break;
        default:
            fa("invalid type for setValue: " + c)
        }
    }
    function Ac() {
        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
            var a = new Uint8Array(1);
            return () => {
                crypto.getRandomValues(a);
                return a[0]
            }
        }
        return () => fa("randomDevice")
    }
    function Ab(a, b, c) {
        c = 0 < c ? c : Ga(a) + 1;
        c = Array(c);
        a = Fa(a, c, 0, c.length);
        b && (c.length = a);
        return c
    }
    function Gh(a, b, c, d) {
        var e = d ? "" : "al " + a;
        Hh(a, f => {
            f || fa('Loading data file "' + a + '" failed (no arrayBuffer).');
            b(new Uint8Array(f));
            e && za(e)
        }
        , () => {
            if (c)
                c();
            else
                throw 'Loading data file "' + a + '" failed.';
        }
        );
        e && Wa(e)
    }
    function Ja(a, b) {
        r.Gg.cj = a;
        r.Gg.dj = b;
        if (!r.Gg.Th)
            return 1;
        r.Gg.Qj || (r.Gg.Qj = !0);
        if (0 == a)
            r.Gg.Eh = function() {
                var d = Math.max(0, r.Gg.wm + b - Bb()) | 0;
                setTimeout(r.Gg.Zi, d)
            }
            ,
            r.Gg.method = "timeout";
        else if (1 == a)
            r.Gg.Eh = function() {
                r.requestAnimationFrame(r.Gg.Zi)
            }
            ,
            r.Gg.method = "rAF";
        else if (2 == a) {
            if ("undefined" == typeof setImmediate) {
                var c = [];
                addEventListener("message", d => {
                    if ("setimmediate" === d.data || "setimmediate" === d.data.target)
                        d.stopPropagation(),
                        c.shift()()
                }
                , !0);
                setImmediate = function(d) {
                    c.push(d);
                    postMessage("setimmediate", "*")
                }
            }
            r.Gg.Eh = function() {
                setImmediate(r.Gg.Zi)
            }
            ;
            r.Gg.method = "immediate"
        }
        return 0
    }
    function Bc(a) {
        Xa = a;
        if (!Ih) {
            if (l.onExit)
                l.onExit(a);
            Aa = !0
        }
        zb(a, new tc(a))
    }
    function Jh(a) {
        Xa = a;
        Bc(a)
    }
    function Cc(a, b, c, d, e) {
        !r.Gg.Th || fa("emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
        r.Gg.Th = a;
        r.Gg.ij = d;
        var f = r.Gg.Sh;
        r.Gg.Qj = !1;
        r.Gg.Zi = function() {
            if (!Aa)
                if (0 < r.Gg.Mk.length) {
                    var h = Date.now()
                      , n = r.Gg.Mk.shift();
                    n.Th(n.ij);
                    if (r.Gg.Pj) {
                        var q = r.Gg.Pj
                          , u = 0 == q % 1 ? q - 1 : Math.floor(q);
                        r.Gg.Pj = n.Lm ? u : (8 * q + (u + .5)) / 9
                    }
                    Ka('main loop blocker "' + n.name + '" took ' + (Date.now() - h) + " ms");
                    r.Gg.Dm();
                    f < r.Gg.Sh || setTimeout(r.Gg.Zi, 0)
                } else
                    f < r.Gg.Sh || (r.Gg.mj = r.Gg.mj + 1 | 0,
                    1 == r.Gg.cj && 1 < r.Gg.dj && 0 != r.Gg.mj % r.Gg.dj ? r.Gg.Eh() : (0 == r.Gg.cj && (r.Gg.wm = Bb()),
                    r.Gg.pm(a),
                    f < r.Gg.Sh || ("object" == typeof SDL && SDL.audio && SDL.audio.hm && SDL.audio.hm(),
                    r.Gg.Eh())))
        }
        ;
        e || (b && 0 < b ? Ja(0, 1E3 / b) : Ja(1, 1),
        r.Gg.Eh());
        if (c)
            throw "unwind";
    }
    function $a(a) {
        if (!Aa)
            try {
                a()
            } catch (b) {
                yc(b)
            }
    }
    function Dc(a, b) {
        return setTimeout(function() {
            $a(a)
        }, b)
    }
    function La(a) {
        La.Sj || (La.Sj = {});
        La.Sj[a] || (La.Sj[a] = 1,
        ea(a))
    }
    function xa(a) {
        var b = Ga(a) + 1
          , c = ba(b);
        c && Fa(a, Z, c, b);
        return c
    }
    function Ec(a, b) {
        Cb.length = 0;
        var c;
        for (b >>= 2; c = O[a++]; )
            b += 105 != c & b,
            Cb.push(105 == c ? m[b] : ha[b++ >> 1]),
            ++b;
        return Cb
    }
    function Fc(a, b, c) {
        b = Ec(b, c);
        return Gc[a].apply(null, b)
    }
    function da(a) {
        a = 2 < a ? z(a) : a;
        return ab[a] || document.querySelector(a)
    }
    function Hc(a) {
        return uc(function() {
            var b = Ca(8)
              , c = b + 4
              , d = Ca(a.id.length + 1);
            N(a.id, d, a.id.length + 1);
            if (d = da(d))
                m[b >> 2] = d.width,
                m[c >> 2] = d.height;
            return [m[b >> 2], m[c >> 2]]
        })
    }
    function Ic(a, b, c) {
        a = da(a);
        if (!a)
            return -4;
        a.width = b;
        a.height = c;
        return 0
    }
    function Jc(a, b, c) {
        a.Km ? uc(function() {
            var d = Ca(a.id.length + 1);
            N(a.id, d, a.id.length + 1);
            Ic(d, b, c)
        }) : (a.width = b,
        a.height = c)
    }
    function Kh(a) {
        function b() {
            document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (document.removeEventListener("fullscreenchange", b),
            document.removeEventListener("webkitfullscreenchange", b),
            Jc(a, d, e),
            a.style.width = f,
            a.style.height = h,
            a.style.backgroundColor = n,
            q || (document.body.style.backgroundColor = "white"),
            document.body.style.backgroundColor = q,
            a.style.paddingLeft = u,
            a.style.paddingRight = v,
            a.style.paddingTop = A,
            a.style.paddingBottom = D,
            a.style.marginLeft = t,
            a.style.marginRight = E,
            a.style.marginTop = L,
            a.style.marginBottom = I,
            document.body.style.margin = P,
            document.documentElement.style.overflow = la,
            document.body.scroll = C,
            a.style.Dh = Q,
            a.ii && a.ii.zh.viewport(0, 0, d, e),
            bb.Ii && V(bb.Ii)(37, 0, bb.ck))
        }
        var c = Hc(a)
          , d = c[0]
          , e = c[1]
          , f = a.style.width
          , h = a.style.height
          , n = a.style.backgroundColor
          , q = document.body.style.backgroundColor
          , u = a.style.paddingLeft
          , v = a.style.paddingRight
          , A = a.style.paddingTop
          , D = a.style.paddingBottom
          , t = a.style.marginLeft
          , E = a.style.marginRight
          , L = a.style.marginTop
          , I = a.style.marginBottom
          , P = document.body.style.margin
          , la = document.documentElement.style.overflow
          , C = document.body.scroll
          , Q = a.style.Dh;
        document.addEventListener("fullscreenchange", b);
        document.addEventListener("webkitfullscreenchange", b);
        return b
    }
    function Db(a, b, c) {
        a.style.paddingLeft = a.style.paddingRight = c + "px";
        a.style.paddingTop = a.style.paddingBottom = b + "px"
    }
    function cb(a) {
        return 0 > ab.indexOf(a) ? a.getBoundingClientRect() : {
            left: 0,
            top: 0
        }
    }
    function Eb(a, b) {
        if (0 != b.Rj || 0 != b.kj) {
            Kh(a);
            var c = b.um ? innerWidth : screen.width
              , d = b.um ? innerHeight : screen.height
              , e = cb(a)
              , f = e.width;
            e = e.height;
            var h = Hc(a)
              , n = h[0];
            h = h[1];
            3 == b.Rj ? (Db(a, (d - e) / 2, (c - f) / 2),
            c = f,
            d = e) : 2 == b.Rj && (c * h < n * d ? (f = h * c / n,
            Db(a, (d - f) / 2, 0),
            d = f) : (f = n * d / h,
            Db(a, 0, (c - f) / 2),
            c = f));
            a.style.backgroundColor || (a.style.backgroundColor = "black");
            document.body.style.backgroundColor || (document.body.style.backgroundColor = "black");
            a.style.width = c + "px";
            a.style.height = d + "px";
            1 == b.El && (a.style.Dh = "optimizeSpeed",
            a.style.Dh = "-moz-crisp-edges",
            a.style.Dh = "-o-crisp-edges",
            a.style.Dh = "-webkit-optimize-contrast",
            a.style.Dh = "optimize-contrast",
            a.style.Dh = "crisp-edges",
            a.style.Dh = "pixelated");
            f = 2 == b.kj ? devicePixelRatio : 1;
            0 != b.kj && (c = c * f | 0,
            d = d * f | 0,
            Jc(a, c, d),
            a.ii && a.ii.zh.viewport(0, 0, c, d))
        }
        if (a.requestFullscreen)
            a.requestFullscreen();
        else if (a.webkitRequestFullscreen)
            a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        else
            return w.fullscreenEnabled() ? -3 : -1;
        bb = b;
        b.Ii && V(b.Ii)(37, 0, b.ck);
        return 0
    }
    function Fb(a) {
        if (a.requestPointerLock)
            a.requestPointerLock();
        else if (a.Yi)
            a.Yi();
        else
            return document.body.requestPointerLock || document.body.Yi ? -3 : -1;
        return 0
    }
    function Kc(a, b) {
        ha[a >> 3] = b.timestamp;
        for (var c = 0; c < b.axes.length; ++c)
            ha[a + 8 * c + 16 >> 3] = b.axes[c];
        for (c = 0; c < b.buttons.length; ++c)
            ha[a + 8 * c + 528 >> 3] = "object" == typeof b.buttons[c] ? b.buttons[c].value : b.buttons[c];
        for (c = 0; c < b.buttons.length; ++c)
            m[a + 4 * c + 1040 >> 2] = "object" == typeof b.buttons[c] ? b.buttons[c].pressed : 1 == b.buttons[c];
        m[a + 1296 >> 2] = b.connected;
        m[a + 1300 >> 2] = b.index;
        m[a + 8 >> 2] = b.axes.length;
        m[a + 12 >> 2] = b.buttons.length;
        N(b.id, a + 1304, 64);
        N(b.mapping, a + 1368, 64)
    }
    function oa(a, b, c, d) {
        for (var e = 0; e < a; e++) {
            var f = k[c]()
              , h = f && p.Uh(d);
            f ? (f.name = h,
            d[h] = f) : p.Fg(1282);
            m[b + 4 * e >> 2] = h
        }
    }
    function Lc(a, b, c, d, e, f, h, n) {
        b = p.Lg[b];
        if (a = k[a](b, c))
            d = n && N(a.name, n, d),
            e && (m[e >> 2] = d),
            f && (m[f >> 2] = a.size),
            h && (m[h >> 2] = a.type)
    }
    function Ma(a, b) {
        B[a >> 2] = b;
        B[a + 4 >> 2] = (b - B[a >> 2]) / 4294967296
    }
    function db(a, b, c) {
        if (b) {
            var d = F;
            switch (a) {
            case 36346:
                d = 1;
                break;
            case 36344:
                0 != c && 1 != c && p.Fg(1280);
                return;
            case 34814:
            case 36345:
                d = 0;
                break;
            case 34466:
                var e = k.getParameter(34467);
                d = e ? e.length : 0;
                break;
            case 33309:
                if (2 > p.Tg.version) {
                    p.Fg(1282);
                    return
                }
                d = 2 * (k.getSupportedExtensions() || []).length;
                break;
            case 33307:
            case 33308:
                if (2 > p.Tg.version) {
                    p.Fg(1280);
                    return
                }
                d = 33307 == a ? 3 : 0
            }
            if (d === F)
                switch (e = k.getParameter(a),
                typeof e) {
                case "number":
                    d = e;
                    break;
                case "boolean":
                    d = e ? 1 : 0;
                    break;
                case "string":
                    p.Fg(1280);
                    return;
                case "object":
                    if (null === e)
                        switch (a) {
                        case 34964:
                        case 35725:
                        case 34965:
                        case 36006:
                        case 36007:
                        case 32873:
                        case 34229:
                        case 36662:
                        case 36663:
                        case 35053:
                        case 35055:
                        case 36010:
                        case 35097:
                        case 35869:
                        case 32874:
                        case 36389:
                        case 35983:
                        case 35368:
                        case 34068:
                            d = 0;
                            break;
                        default:
                            p.Fg(1280);
                            return
                        }
                    else {
                        if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
                            for (a = 0; a < e.length; ++a)
                                switch (c) {
                                case 0:
                                    m[b + 4 * a >> 2] = e[a];
                                    break;
                                case 2:
                                    J[b + 4 * a >> 2] = e[a];
                                    break;
                                case 4:
                                    Z[b + a >> 0] = e[a] ? 1 : 0
                                }
                            return
                        }
                        try {
                            d = e.name | 0
                        } catch (f) {
                            p.Fg(1280);
                            ea("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + f + ")");
                            return
                        }
                    }
                    break;
                default:
                    p.Fg(1280);
                    ea("GL_INVALID_ENUM in glGet" + c + "v: Native code calling glGet" + c + "v(" + a + ") and it returns " + e + " of type " + typeof e + "!");
                    return
                }
            switch (c) {
            case 1:
                Ma(b, d);
                break;
            case 0:
                m[b >> 2] = d;
                break;
            case 2:
                J[b >> 2] = d;
                break;
            case 4:
                Z[b >> 0] = d ? 1 : 0
            }
        } else
            p.Fg(1281)
    }
    function Mc(a, b, c, d) {
        if (c) {
            b = k.getIndexedParameter(a, b);
            switch (typeof b) {
            case "boolean":
                a = b ? 1 : 0;
                break;
            case "number":
                a = b;
                break;
            case "object":
                if (null === b)
                    switch (a) {
                    case 35983:
                    case 35368:
                        a = 0;
                        break;
                    default:
                        p.Fg(1280);
                        return
                    }
                else if (b instanceof WebGLBuffer)
                    a = b.name | 0;
                else {
                    p.Fg(1280);
                    return
                }
                break;
            default:
                p.Fg(1280);
                return
            }
            switch (d) {
            case 1:
                Ma(c, a);
                break;
            case 0:
                m[c >> 2] = a;
                break;
            case 2:
                J[c >> 2] = a;
                break;
            case 4:
                Z[c >> 0] = a ? 1 : 0;
                break;
            default:
                throw "internal emscriptenWebGLGetIndexed() error, bad type: " + d;
            }
        } else
            p.Fg(1281)
    }
    function Na(a) {
        var b = Ga(a) + 1
          , c = ba(b);
        N(a, c, b);
        return c
    }
    function Nc(a) {
        return "]" == a.slice(-1) && a.lastIndexOf("[")
    }
    function Oc(a) {
        var b = a.Ei, c = a.Yk, d;
        if (!b)
            for (a.Ei = b = {},
            a.Xk = {},
            d = 0; d < k.getProgramParameter(a, 35718); ++d) {
                var e = k.getActiveUniform(a, d);
                var f = e.name;
                e = e.size;
                var h = Nc(f);
                h = 0 < h ? f.slice(0, h) : f;
                var n = a.Wj;
                a.Wj += e;
                c[h] = [e, n];
                for (f = 0; f < e; ++f)
                    b[n] = f,
                    a.Xk[n++] = h
            }
    }
    function K(a) {
        var b = k.ql;
        if (b) {
            var c = b.Ei[a];
            "number" == typeof c && (b.Ei[a] = c = k.getUniformLocation(b, b.Xk[a] + (0 < c ? "[" + c + "]" : "")));
            return c
        }
        p.Fg(1282)
    }
    function Gb(a, b, c, d) {
        if (c)
            if (a = p.Lg[a],
            Oc(a),
            a = k.getUniform(a, K(b)),
            "number" == typeof a || "boolean" == typeof a)
                switch (d) {
                case 0:
                    m[c >> 2] = a;
                    break;
                case 2:
                    J[c >> 2] = a
                }
            else
                for (b = 0; b < a.length; b++)
                    switch (d) {
                    case 0:
                        m[c + 4 * b >> 2] = a[b];
                        break;
                    case 2:
                        J[c + 4 * b >> 2] = a[b]
                    }
        else
            p.Fg(1281)
    }
    function eb(a, b, c, d) {
        if (c)
            if (a = k.getVertexAttrib(a, b),
            34975 == b)
                m[c >> 2] = a && a.name;
            else if ("number" == typeof a || "boolean" == typeof a)
                switch (d) {
                case 0:
                    m[c >> 2] = a;
                    break;
                case 2:
                    J[c >> 2] = a;
                    break;
                case 5:
                    m[c >> 2] = Math.fround(a)
                }
            else
                for (b = 0; b < a.length; b++)
                    switch (d) {
                    case 0:
                        m[c + 4 * b >> 2] = a[b];
                        break;
                    case 2:
                        J[c + 4 * b >> 2] = a[b];
                        break;
                    case 5:
                        m[c + 4 * b >> 2] = Math.fround(a[b])
                    }
        else
            p.Fg(1281)
    }
    function Oa(a) {
        a -= 5120;
        return 0 == a ? Z : 1 == a ? O : 2 == a ? Ba : 4 == a ? m : 6 == a ? J : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? B : T
    }
    function Pa(a) {
        return 31 - Math.clz32(a.BYTES_PER_ELEMENT)
    }
    function Lh(a, b) {
        if (!w.fullscreenEnabled())
            return -1;
        a = da(a);
        return a ? a.requestFullscreen || a.webkitRequestFullscreen ? w.jj() ? Eb(a, b) : b.wl ? (w.kk(Eb, 1, [a, b]),
        1) : -2 : -3 : -4
    }
    function Mh(a, b, c, d, e, f) {
        a = {
            target: da(a),
            Ug: f,
            dh: d,
            gh: function(h) {
                h = h || event;
                var n = V(d)(e, 0, b);
                n && (n = z(n));
                if (n)
                    return h.preventDefault(),
                    h.returnValue = n
            },
            bh: c
        };
        w.ih(a)
    }
    function Pc(a, b, c, d, e, f) {
        w.rk || (w.rk = ba(256));
        a = {
            target: da(a),
            Ug: f,
            dh: d,
            gh: function(h) {
                h = h || event;
                var n = h.target.id ? h.target.id : ""
                  , q = w.rk;
                N(w.wj(h.target), q + 0, 128);
                N(n, q + 128, 128);
                V(d)(e, q, b) && h.preventDefault()
            },
            bh: c
        };
        w.ih(a)
    }
    function Qc(a, b, c, d, e, f) {
        w.sk || (w.sk = ba(280));
        w.ih({
            target: a,
            Ug: f,
            dh: d,
            gh: function(h) {
                h = h || event;
                var n = w.sk
                  , q = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
                  , u = !!q;
                m[n >> 2] = u;
                m[n + 4 >> 2] = w.fullscreenEnabled();
                var v = u ? q : w.gm
                  , A = v && v.id ? v.id : "";
                N(w.wj(v), n + 8, 128);
                N(A, n + 136, 128);
                m[n + 264 >> 2] = v ? v.clientWidth : 0;
                m[n + 268 >> 2] = v ? v.clientHeight : 0;
                m[n + 272 >> 2] = screen.width;
                m[n + 276 >> 2] = screen.height;
                u && (w.gm = q);
                V(d)(e, n, b) && h.preventDefault()
            },
            bh: c
        })
    }
    function Rc(a, b, c, d, e, f) {
        w.uk || (w.uk = ba(1432));
        a = {
            target: da(a),
            ki: !0,
            Ug: f,
            dh: d,
            gh: function(h) {
                h = h || event;
                var n = w.uk;
                Kc(n, h.gamepad);
                V(d)(e, n, b) && h.preventDefault()
            },
            bh: c
        };
        w.ih(a)
    }
    function Hb(a, b, c, d, e, f) {
        w.Dk || (w.Dk = ba(176));
        a = {
            target: da(a),
            ki: !0,
            Ug: f,
            dh: d,
            gh: function(h) {
                var n = w.Dk;
                ha[n >> 3] = h.timeStamp;
                var q = n >> 2;
                m[q + 2] = h.location;
                m[q + 3] = h.ctrlKey;
                m[q + 4] = h.shiftKey;
                m[q + 5] = h.altKey;
                m[q + 6] = h.metaKey;
                m[q + 7] = h.repeat;
                m[q + 8] = h.charCode;
                m[q + 9] = h.keyCode;
                m[q + 10] = h.which;
                N(h.key || "", n + 44, 32);
                N(h.code || "", n + 76, 32);
                N(h.char || "", n + 108, 32);
                N(h.locale || "", n + 140, 32);
                V(d)(e, n, b) && h.preventDefault()
            },
            bh: c
        };
        w.ih(a)
    }
    function Sc(a, b, c) {
        ha[a >> 3] = b.timeStamp;
        a >>= 2;
        m[a + 2] = b.screenX;
        m[a + 3] = b.screenY;
        m[a + 4] = b.clientX;
        m[a + 5] = b.clientY;
        m[a + 6] = b.ctrlKey;
        m[a + 7] = b.shiftKey;
        m[a + 8] = b.altKey;
        m[a + 9] = b.metaKey;
        Ba[2 * a + 20] = b.button;
        Ba[2 * a + 21] = b.buttons;
        m[a + 11] = b.movementX;
        m[a + 12] = b.movementY;
        c = cb(c);
        m[a + 13] = b.clientX - c.left;
        m[a + 14] = b.clientY - c.top
    }
    function Qa(a, b, c, d, e, f) {
        w.Ij || (w.Ij = ba(72));
        a = da(a);
        w.ih({
            target: a,
            ki: "mousemove" != f && "mouseenter" != f && "mouseleave" != f,
            Ug: f,
            dh: d,
            gh: function(h) {
                h = h || event;
                Sc(w.Ij, h, a);
                V(d)(e, w.Ij, b) && h.preventDefault()
            },
            bh: c
        })
    }
    function fb(a, b, c, d, e, f) {
        w.Kk || (w.Kk = ba(260));
        w.ih({
            target: a,
            Ug: f,
            dh: d,
            gh: function(h) {
                h = h || event;
                var n = w.Kk
                  , q = document.pointerLockElement || document.kn || document.Gn || document.mn;
                m[n >> 2] = !!q;
                var u = q && q.id ? q.id : "";
                N(w.wj(q), n + 4, 128);
                N(u, n + 132, 128);
                V(d)(e, n, b) && h.preventDefault()
            },
            bh: c
        })
    }
    function Nh(a, b, c, d, e, f) {
        w.Wk || (w.Wk = ba(36));
        a = da(a);
        w.ih({
            target: a,
            Ug: f,
            dh: d,
            gh: function(h) {
                h = h || event;
                if (h.target == a) {
                    var n = document.body;
                    if (n) {
                        var q = w.Wk;
                        m[q >> 2] = h.detail;
                        m[q + 4 >> 2] = n.clientWidth;
                        m[q + 8 >> 2] = n.clientHeight;
                        m[q + 12 >> 2] = innerWidth;
                        m[q + 16 >> 2] = innerHeight;
                        m[q + 20 >> 2] = outerWidth;
                        m[q + 24 >> 2] = outerHeight;
                        m[q + 28 >> 2] = pageXOffset;
                        m[q + 32 >> 2] = pageYOffset;
                        V(d)(e, q, b) && h.preventDefault()
                    }
                }
            },
            bh: c
        })
    }
    function gb(a, b, c, d, e, f) {
        w.Uk || (w.Uk = ba(1696));
        a = da(a);
        w.ih({
            target: a,
            ki: "touchstart" == f || "touchend" == f,
            Ug: f,
            dh: d,
            gh: function(h) {
                for (var n, q = {}, u = h.touches, v = 0; v < u.length; ++v)
                    n = u[v],
                    n.Bk = n.Jk = 0,
                    q[n.identifier] = n;
                for (v = 0; v < h.changedTouches.length; ++v)
                    n = h.changedTouches[v],
                    n.Bk = 1,
                    q[n.identifier] = n;
                for (v = 0; v < h.targetTouches.length; ++v)
                    q[h.targetTouches[v].identifier].Jk = 1;
                u = w.Uk;
                ha[u >> 3] = h.timeStamp;
                var A = u >> 2;
                m[A + 3] = h.ctrlKey;
                m[A + 4] = h.shiftKey;
                m[A + 5] = h.altKey;
                m[A + 6] = h.metaKey;
                A += 7;
                var D = cb(a)
                  , t = 0;
                for (v in q)
                    if (n = q[v],
                    m[A + 0] = n.identifier,
                    m[A + 1] = n.screenX,
                    m[A + 2] = n.screenY,
                    m[A + 3] = n.clientX,
                    m[A + 4] = n.clientY,
                    m[A + 5] = n.pageX,
                    m[A + 6] = n.pageY,
                    m[A + 7] = n.Bk,
                    m[A + 8] = n.Jk,
                    m[A + 9] = n.clientX - D.left,
                    m[A + 10] = n.clientY - D.top,
                    A += 13,
                    31 < ++t)
                        break;
                m[u + 8 >> 2] = t;
                V(d)(e, u, b) && h.preventDefault()
            },
            bh: c
        })
    }
    function Oh(a, b, c, d, e, f) {
        w.Zk || (w.Zk = ba(8));
        w.ih({
            target: a,
            Ug: f,
            dh: d,
            gh: function(h) {
                h = h || event;
                var n = w.Zk
                  , q = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState);
                m[n >> 2] = document.hidden;
                m[n + 4 >> 2] = q;
                V(d)(e, n, b) && h.preventDefault()
            },
            bh: c
        })
    }
    function Ph(a, b, c, d, e, f) {
        w.$k || (w.$k = ba(104));
        w.ih({
            target: a,
            ki: !0,
            Ug: f,
            dh: d,
            gh: function(h) {
                h = h || event;
                var n = w.$k;
                Sc(n, h, a);
                ha[n + 72 >> 3] = h.deltaX;
                ha[n + 80 >> 3] = h.deltaY;
                ha[n + 88 >> 3] = h.deltaZ;
                m[n + 96 >> 2] = h.deltaMode;
                V(d)(e, n, b) && h.preventDefault()
            },
            bh: c
        })
    }
    function Ib(a, b, c, d, e) {
        function f(Q) {
            var aa = 0
              , ia = 0;
            Q && (ia = C.response ? C.response.byteLength : 0,
            aa = ba(ia),
            O.set(new Uint8Array(C.response), aa));
            B[a + 12 >> 2] = aa;
            S.Zg(a + 16, ia)
        }
        var h = B[a + 8 >> 2];
        if (h) {
            var n = z(h)
              , q = a + 112
              , u = z(q);
            u || (u = "GET");
            var v = B[q + 52 >> 2]
              , A = B[q + 56 >> 2]
              , D = !!B[q + 60 >> 2]
              , t = B[q + 68 >> 2]
              , E = B[q + 72 >> 2];
            h = B[q + 76 >> 2];
            var L = B[q + 80 >> 2]
              , I = B[q + 84 >> 2];
            q = B[q + 88 >> 2];
            var P = !!(v & 1)
              , la = !!(v & 2);
            v = !!(v & 64);
            t = t ? z(t) : F;
            E = E ? z(E) : F;
            var C = new XMLHttpRequest;
            C.withCredentials = D;
            C.open(u, n, !v, t, E);
            v || (C.timeout = A);
            C.En = n;
            C.responseType = "arraybuffer";
            L && (n = z(L),
            C.overrideMimeType(n));
            if (h)
                for (; ; ) {
                    u = B[h >> 2];
                    if (!u)
                        break;
                    n = B[h + 4 >> 2];
                    if (!n)
                        break;
                    h += 8;
                    u = z(u);
                    n = z(n);
                    C.setRequestHeader(u, n)
                }
            S.Yj.push(C);
            B[a + 0 >> 2] = S.Yj.length;
            h = I && q ? O.slice(I, I + q) : null;
            C.onload = Q => {
                f(P && !la);
                var aa = C.response ? C.response.byteLength : 0;
                S.Zg(a + 24, 0);
                aa && S.Zg(a + 32, aa);
                T[a + 40 >> 1] = C.readyState;
                T[a + 42 >> 1] = C.status;
                C.statusText && N(C.statusText, a + 44, 64);
                200 <= C.status && 300 > C.status ? b && b(a, C, Q) : c && c(a, C, Q)
            }
            ;
            C.onerror = Q => {
                f(P);
                var aa = C.status;
                S.Zg(a + 24, 0);
                S.Zg(a + 32, C.response ? C.response.byteLength : 0);
                T[a + 40 >> 1] = C.readyState;
                T[a + 42 >> 1] = aa;
                c && c(a, C, Q)
            }
            ;
            C.ontimeout = Q => {
                c && c(a, C, Q)
            }
            ;
            C.onprogress = Q => {
                var aa = P && la && C.response ? C.response.byteLength : 0
                  , ia = 0;
                P && la && (ia = ba(aa),
                O.set(new Uint8Array(C.response), ia));
                B[a + 12 >> 2] = ia;
                S.Zg(a + 16, aa);
                S.Zg(a + 24, Q.loaded - aa);
                S.Zg(a + 32, Q.total);
                T[a + 40 >> 1] = C.readyState;
                3 <= C.readyState && 0 === C.status && 0 < Q.loaded && (C.status = 200);
                T[a + 42 >> 1] = C.status;
                C.statusText && N(C.statusText, a + 44, 64);
                d && d(a, C, Q);
                ia && wa(ia)
            }
            ;
            C.onreadystatechange = Q => {
                T[a + 40 >> 1] = C.readyState;
                2 <= C.readyState && (T[a + 42 >> 1] = C.status);
                e && e(a, C, Q)
            }
            ;
            try {
                C.send(h)
            } catch (Q) {
                c && c(a, C, Q)
            }
        } else
            c(a, 0, "no url specified!")
    }
    function Tc(a, b, c, d, e) {
        if (a) {
            var f = B[b + 112 + 64 >> 2];
            f || (f = B[b + 8 >> 2]);
            var h = z(f);
            try {
                var n = a.transaction(["FILES"], "readwrite").objectStore("FILES").put(c, h);
                n.onsuccess = () => {
                    T[b + 40 >> 1] = 4;
                    T[b + 42 >> 1] = 200;
                    N("OK", b + 44, 64);
                    d(b, 0, h)
                }
                ;
                n.onerror = q => {
                    T[b + 40 >> 1] = 4;
                    T[b + 42 >> 1] = 413;
                    N("Payload Too Large", b + 44, 64);
                    e(b, 0, q)
                }
            } catch (q) {
                e(b, 0, q)
            }
        } else
            e(b, 0, "IndexedDB not available!")
    }
    function Qh(a, b, c, d) {
        if (a) {
            var e = B[b + 112 + 64 >> 2];
            e || (e = B[b + 8 >> 2]);
            e = z(e);
            try {
                var f = a.transaction(["FILES"], "readonly").objectStore("FILES").get(e);
                f.onsuccess = h => {
                    if (h.target.result) {
                        h = h.target.result;
                        var n = h.byteLength || h.length
                          , q = ba(n);
                        O.set(new Uint8Array(h), q);
                        B[b + 12 >> 2] = q;
                        S.Zg(b + 16, n);
                        S.Zg(b + 24, 0);
                        S.Zg(b + 32, n);
                        T[b + 40 >> 1] = 4;
                        T[b + 42 >> 1] = 200;
                        N("OK", b + 44, 64);
                        c(b, 0, h)
                    } else
                        T[b + 40 >> 1] = 4,
                        T[b + 42 >> 1] = 404,
                        N("Not Found", b + 44, 64),
                        d(b, 0, "no data")
                }
                ;
                f.onerror = h => {
                    T[b + 40 >> 1] = 4;
                    T[b + 42 >> 1] = 404;
                    N("Not Found", b + 44, 64);
                    d(b, 0, h)
                }
            } catch (h) {
                d(b, 0, h)
            }
        } else
            d(b, 0, "IndexedDB not available!")
    }
    function Rh(a, b, c, d) {
        if (a) {
            var e = B[b + 112 + 64 >> 2];
            e || (e = B[b + 8 >> 2]);
            e = z(e);
            try {
                var f = a.transaction(["FILES"], "readwrite").objectStore("FILES").delete(e);
                f.onsuccess = h => {
                    h = h.target.result;
                    B[b + 12 >> 2] = 0;
                    S.Zg(b + 16, 0);
                    S.Zg(b + 24, 0);
                    S.Zg(b + 32, 0);
                    T[b + 40 >> 1] = 4;
                    T[b + 42 >> 1] = 200;
                    N("OK", b + 44, 64);
                    c(b, 0, h)
                }
                ;
                f.onerror = h => {
                    T[b + 40 >> 1] = 4;
                    T[b + 42 >> 1] = 404;
                    N("Not Found", b + 44, 64);
                    d(b, 0, h)
                }
            } catch (h) {
                d(b, 0, h)
            }
        } else
            d(b, 0, "IndexedDB not available!")
    }
    function Ra() {
        if (!Ra.Sk) {
            var a = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                _: Jb || "./this.program"
            }, b;
            for (b in Kb)
                Kb[b] === F ? delete a[b] : a[b] = Kb[b];
            var c = [];
            for (b in a)
                c.push(b + "=" + a[b]);
            Ra.Sk = c
        }
        return Ra.Sk
    }
    function hb(a, b) {
        hb.Nk || (hb.Nk = Ac());
        for (var c = 0; c < b; c++)
            Z[a + c >> 0] = hb.Nk();
        return 0
    }
    function ib(a) {
        return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400)
    }
    function Sh(a, b, c, d) {
        function e(t, E, L) {
            for (t = "number" == typeof t ? t.toString() : t || ""; t.length < E; )
                t = L[0] + t;
            return t
        }
        function f(t, E) {
            return e(t, E, "0")
        }
        function h(t, E) {
            function L(P) {
                return 0 > P ? -1 : 0 < P ? 1 : 0
            }
            var I;
            0 === (I = L(t.getFullYear() - E.getFullYear())) && 0 === (I = L(t.getMonth() - E.getMonth())) && (I = L(t.getDate() - E.getDate()));
            return I
        }
        function n(t) {
            switch (t.getDay()) {
            case 0:
                return new Date(t.getFullYear() - 1,11,29);
            case 1:
                return t;
            case 2:
                return new Date(t.getFullYear(),0,3);
            case 3:
                return new Date(t.getFullYear(),0,2);
            case 4:
                return new Date(t.getFullYear(),0,1);
            case 5:
                return new Date(t.getFullYear() - 1,11,31);
            case 6:
                return new Date(t.getFullYear() - 1,11,30)
            }
        }
        function q(t) {
            var E = t.Qh;
            for (t = new Date((new Date(t.Rh + 1900,0,1)).getTime()); 0 < E; ) {
                var L = ib(t.getFullYear())
                  , I = t.getMonth();
                L = (L ? Uc : Vc)[I];
                if (E > L - t.getDate())
                    E -= L - t.getDate() + 1,
                    t.setDate(1),
                    11 > I ? t.setMonth(I + 1) : (t.setMonth(0),
                    t.setFullYear(t.getFullYear() + 1));
                else {
                    t.setDate(t.getDate() + E);
                    break
                }
            }
            I = new Date(t.getFullYear() + 1,0,4);
            E = n(new Date(t.getFullYear(),0,4));
            I = n(I);
            return 0 >= h(E, t) ? 0 >= h(I, t) ? t.getFullYear() + 1 : t.getFullYear() : t.getFullYear() - 1
        }
        var u = m[d + 40 >> 2];
        d = {
            zm: m[d >> 2],
            ym: m[d + 4 >> 2],
            ej: m[d + 8 >> 2],
            Vj: m[d + 12 >> 2],
            fj: m[d + 16 >> 2],
            Rh: m[d + 20 >> 2],
            th: m[d + 24 >> 2],
            Qh: m[d + 28 >> 2],
            Bn: m[d + 32 >> 2],
            xm: m[d + 36 >> 2],
            Am: u ? z(u) : ""
        };
        c = z(c);
        u = {
            "%c": "%a %b %d %H:%M:%S %Y",
            "%D": "%m/%d/%y",
            "%F": "%Y-%m-%d",
            "%h": "%b",
            "%r": "%I:%M:%S %p",
            "%R": "%H:%M",
            "%T": "%H:%M:%S",
            "%x": "%m/%d/%y",
            "%X": "%H:%M:%S",
            "%Ec": "%c",
            "%EC": "%C",
            "%Ex": "%m/%d/%y",
            "%EX": "%H:%M:%S",
            "%Ey": "%y",
            "%EY": "%Y",
            "%Od": "%d",
            "%Oe": "%e",
            "%OH": "%H",
            "%OI": "%I",
            "%Om": "%m",
            "%OM": "%M",
            "%OS": "%S",
            "%Ou": "%u",
            "%OU": "%U",
            "%OV": "%V",
            "%Ow": "%w",
            "%OW": "%W",
            "%Oy": "%y"
        };
        for (var v in u)
            c = c.replace(new RegExp(v,"g"), u[v]);
        var A = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
          , D = "January February March April May June July August September October November December".split(" ");
        u = {
            "%a": function(t) {
                return A[t.th].substring(0, 3)
            },
            "%A": function(t) {
                return A[t.th]
            },
            "%b": function(t) {
                return D[t.fj].substring(0, 3)
            },
            "%B": function(t) {
                return D[t.fj]
            },
            "%C": function(t) {
                return f((t.Rh + 1900) / 100 | 0, 2)
            },
            "%d": function(t) {
                return f(t.Vj, 2)
            },
            "%e": function(t) {
                return e(t.Vj, 2, " ")
            },
            "%g": function(t) {
                return q(t).toString().substring(2)
            },
            "%G": function(t) {
                return q(t)
            },
            "%H": function(t) {
                return f(t.ej, 2)
            },
            "%I": function(t) {
                t = t.ej;
                0 == t ? t = 12 : 12 < t && (t -= 12);
                return f(t, 2)
            },
            "%j": function(t) {
                for (var E = t.Vj, L = ib(t.Rh + 1900) ? Uc : Vc, I = 0, P = 0; P <= t.fj - 1; I += L[P++])
                    ;
                return f(E + I, 3)
            },
            "%m": function(t) {
                return f(t.fj + 1, 2)
            },
            "%M": function(t) {
                return f(t.ym, 2)
            },
            "%n": function() {
                return "\n"
            },
            "%p": function(t) {
                return 0 <= t.ej && 12 > t.ej ? "AM" : "PM"
            },
            "%S": function(t) {
                return f(t.zm, 2)
            },
            "%t": function() {
                return "\t"
            },
            "%u": function(t) {
                return t.th || 7
            },
            "%U": function(t) {
                return f(Math.floor((t.Qh + 7 - t.th) / 7), 2)
            },
            "%V": function(t) {
                var E = Math.floor((t.Qh + 7 - (t.th + 6) % 7) / 7);
                2 >= (t.th + 371 - t.Qh - 2) % 7 && E++;
                if (E)
                    53 == E && (L = (t.th + 371 - t.Qh) % 7,
                    4 == L || 3 == L && ib(t.Rh) || (E = 1));
                else {
                    E = 52;
                    var L = (t.th + 7 - t.Qh - 1) % 7;
                    (4 == L || 5 == L && ib(t.Rh % 400 - 1)) && E++
                }
                return f(E, 2)
            },
            "%w": function(t) {
                return t.th
            },
            "%W": function(t) {
                return f(Math.floor((t.Qh + 7 - (t.th + 6) % 7) / 7), 2)
            },
            "%y": function(t) {
                return (t.Rh + 1900).toString().substring(2)
            },
            "%Y": function(t) {
                return t.Rh + 1900
            },
            "%z": function(t) {
                t = t.xm;
                var E = 0 <= t;
                t = Math.abs(t) / 60;
                return (E ? "+" : "-") + String("0000" + (t / 60 * 100 + t % 60)).slice(-4)
            },
            "%Z": function(t) {
                return t.Am
            },
            "%%": function() {
                return "%"
            }
        };
        c = c.replace(/%%/g, "\x00\x00");
        for (v in u)
            c.includes(v) && (c = c.replace(new RegExp(v,"g"), u[v](d)));
        c = c.replace(/\0\0/g, "%");
        v = Ab(c, !1);
        if (v.length > b)
            return 0;
        Z.set(v, a);
        return v.length - 1
    }
    function Th(a) {
        var b = l._main;
        a = a || [];
        a.unshift(Jb);
        var c = a.length
          , d = Ca(4 * (c + 1))
          , e = d >> 2;
        a.forEach(h => {
            var n = m
              , q = e++
              , u = Ga(h) + 1
              , v = Ca(u);
            Fa(h, Z, v, u);
            n[q] = v
        }
        );
        m[e] = 0;
        try {
            var f = b(c, d);
            Jh(f, !0);
            return f
        } catch (h) {
            return yc(h)
        }
    }
    function Wc(a) {
        function b() {
            if (!jb && (jb = !0,
            l.calledRun = !0,
            !Aa)) {
                l.noFSInit || g.wh.Aj || g.wh();
                g.Ak = !1;
                ra.wh();
                Ya(Xc);
                Ya(Uh);
                if (l.onRuntimeInitialized)
                    l.onRuntimeInitialized();
                Yc && Th(a);
                if (l.postRun)
                    for ("function" == typeof l.postRun && (l.postRun = [l.postRun]); l.postRun.length; )
                        Zc.unshift(l.postRun.shift());
                Ya(Zc)
            }
        }
        a = a || $c;
        if (!(0 < va)) {
            if (l.preRun)
                for ("function" == typeof l.preRun && (l.preRun = [l.preRun]); l.preRun.length; )
                    ad.unshift(l.preRun.shift());
            Ya(ad);
            0 < va || (l.setStatus ? (l.setStatus("Running..."),
            setTimeout(function() {
                setTimeout(function() {
                    l.setStatus("")
                }, 1);
                b()
            }, 1)) : b())
        }
    }
    var na = []
      , ka = []
      , Lb = []
      , kb = []
      , Mb = []
      , Tb = new TextDecoder("utf8")
      , mb = 0
      , Vh = function() {}
    .toString;
    "undefined" != typeof window && (document.addEventListener("paste", function(a) {
        var b = !0;
        a.target && "textInput" == a.target.className && (b = !1);
        if (b) {
            a.preventDefault();
            try {
                var c = R(a.clipboardData.getData("text/plain"))
            } catch (d) {
                return
            }
            bd(c);
            wa(c)
        }
    }, {
        capture: !0
    }),
    window.onbeforeunload = function() {
        if (cd())
            return "Are you sure you want to leave?"
    }
    ,
    window.addEventListener("blur", function() {
        Nb()
    }),
    document.addEventListener("visibilitychange", function() {
        ("hidden" === document.visibilityState || document.hidden) && Nb()
    }),
    window.addEventListener("mousedown", function(a) {
        a.preventDefault = function() {}
    }, {
        capture: !0
    }),
    window.addEventListener("dragstart", function(a) {
        a.preventDefault()
    }, {
        capture: !0
    }),
    window.addEventListener("selectstart", function(a) {
        var b = !0;
        a.target && "textInput" == a.target.className && (b = !1);
        b || (a.preventDefault = function() {}
        );
        a.preventDefault()
    }, {
        capture: !0
    }),
    window.addEventListener("keydown", function(a) {
        var b = !0
          , c = a.keyCode;
        a.target && "textInput" == a.target.className && (b = !1);
        if (122 == c || 123 == c)
            b = !1;
        (a.ctrlKey || a.metaKey) && 88 == c && (b = !1);
        (a.ctrlKey || a.metaKey) && 67 == c && (b = !1);
        (a.ctrlKey || a.metaKey) && 86 == c && (b = !1);
        9 == c && a.preventDefault();
        b ? a.preventDefault() : a.preventDefault = function() {}
    }, {
        capture: !0
    }),
    window.addEventListener("keypress", function(a) {
        var b = !0;
        a.target && "textInput" == a.target.className && (b = !1);
        b || (a.preventDefault = function() {}
        )
    }, {
        capture: !0
    }),
    document.addEventListener("copy", function(a) {
        var b = !0;
        a.target && "textInput" == a.target.className && (b = !1);
        b && (a.preventDefault(),
        b = dd()) && (a.clipboardData.setData("text/plain", z(b)),
        wa(b))
    }, {
        capture: !0
    }),
    document.addEventListener("cut", function(a) {
        var b = !0;
        a.target && "textInput" == a.target.className && (b = !1);
        b && (a.preventDefault(),
        b = ed()) && (a.clipboardData.setData("text/plain", z(b)),
        wa(b))
    }, {
        capture: !0
    }),
    window.addEventListener("wheel", function(a) {
        var b = !1;
        a.wheelDeltaY ? a.wheelDeltaY === -3 * a.deltaY && (b = !0) : 0 === a.deltaMode && (b = !0);
        var c = a.deltaY / 175;
        b && (c *= 3);
        0 != a.deltaMode && (1 == a.deltaMode ? c /= 18 : 2 == a.deltaMode && (c /= 1E3));
        fd(c)
    }),
    window.cp6 = window.cp6 || {},
    window.cp6.disconnect = function() {
        gd()
    }
    ,
    window.cp6.forceServerID = function(a) {
        (a = R(a)) && hd(a);
        wa(a)
    }
    ,
    window.cp6.simulateContextLoss = function() {
        jd()
    }
    );
    l = l || {};
    var x = []
      , ja = []
      , qa = []
      , ta = []
      , hg = []
      , rb = [0, 0];
    const Ea = [0, 0, 0, 0];
    var Va = "undefined" != typeof OffscreenCanvas ? (new OffscreenCanvas(1,1)).getContext("2d") : document.createElement("canvas").getContext("2d");
    Va.canvas.width = 1;
    Va.canvas.height = 1;
    var Ob = {}
      , lb = {};
    "undefined" != typeof window && window.addEventListener("beforeunload", function() {
        for (var a in lb) {
            var b = a;
            if (Ob[b]) {
                try {
                    Ob[b].close()
                } catch (c) {
                    console.error(c)
                }
                delete Ob[b]
            }
            if (lb[b]) {
                try {
                    lb[b].close()
                } catch (c) {
                    console.error(c)
                }
                delete lb[b]
            }
            kd(b, 0)
        }
    });
    var ld = Object.assign({}, l), $c = [], Jb = "./this.program", zb = (a, b) => {
        throw b;
    }
    , ua = "", sc;
    "undefined" != typeof document && document.currentScript && (ua = document.currentScript.src);
    ua = 0 !== ua.indexOf("blob:") ? ua.substr(0, ua.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
    var md = a => {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send(null);
        return b.responseText
    }
    ;
    var Hh = (a, b, c) => {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = () => {
            200 == d.status || 0 == d.status && d.response ? b(d.response) : c()
        }
        ;
        d.onerror = c;
        d.send(null)
    }
    ;
    var Wh = a => document.title = a;
    var Ka = l.print || console.log.bind(console)
      , ea = l.printErr || console.warn.bind(console);
    Object.assign(l, ld);
    ld = null;
    l.arguments && ($c = l.arguments);
    l.thisProgram && (Jb = l.thisProgram);
    l.quit && (zb = l.quit);
    var Ia;
    l.wasmBinary && (Ia = l.wasmBinary);
    var Ih = l.noExitRuntime || !0;
    "object" != typeof WebAssembly && fa("no native wasm support detected");
    var nd, Aa = !1, Xa, pc = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : F, od, Z, O, Ba, T, m, B, J, ha, xc, ad = [], Xc = [], Uh = [], Xh = [], Zc = [], va = 0, xb = null, Ha = null;
    var ma = "client.wasm";
    qc(ma) || (ma = Ch(ma));
    var G, W, Gc = {
        4393824: (a, b, c) => {
            a = oc("0aA-_", a);
            J[b >> 2] = -a.fontBoundingBoxAscent;
            J[c >> 2] = a.fontBoundingBoxDescent
        }
        ,
        4393954: (a, b, c) => oc(Sb(b, c), a).width,
        4394018: a => R(x[a].canvas.toDataURL()),
        4394083: () => !1,
        4394111: () => /^((?!chrome|android|firefox|edge).)*safari/i.test(window.navigator.userAgent),
        4394202: () => RegExp("Chrome/14[23].").test(window.navigator.userAgent),
        4394280: a => {
            a = setTimeout(function() {
                kb[b] = null;
                Mb.push(b);
                pd(b)
            }, a);
            if (0 < Mb.length) {
                var b = Mb.pop();
                kb[b] = a
            } else
                b = kb.length,
                kb.push(a);
            return b
        }
        ,
        4394559: () => {
            document.getElementById("canvas").style.cursor = "default"
        }
        ,
        4394623: () => {
            document.getElementById("canvas").style.cursor = "pointer"
        }
        ,
        4394687: () => {
            document.getElementById("canvas").style.cursor = "text"
        }
        ,
        4394748: a => {
            ka[a].blur()
        }
        ,
        4394780: a => {
            ka[a].focus()
        }
        ,
        4394813: a => {
            var b = document.createElement("input");
            b.type = "text";
            b.className = "textInput";
            b.value = z(a);
            b.style.position = "fixed";
            b.onfocus = function() {
                qd(c)
            }
            ;
            document.getElementById("textInputContainer").appendChild(b);
            if (0 < Lb.length) {
                var c = Lb.pop();
                ka[c] = b
            } else
                c = ka.length,
                ka.push(b);
            return c
        }
        ,
        4395245: (a, b, c, d, e, f, h, n, q, u, v, A, D) => {
            a = ka[a];
            v = document.getElementById("canvas").width / (v ? window.innerHeight : window.innerWidth);
            a.maxLength = 0 > u ? null : u;
            a.disabled = !D;
            a.style.left = b / v + "px";
            a.style.top = c / v + "px";
            a.style.width = (d - 2 * q) / v + "px";
            a.style.height = e / v + "px";
            a.style.fontSize = (2048 * f | 0) / 2048 / v + "px";
            a.style.color = "rgb(" + (h >> 16) + ", " + (h >> 8 & 255) + ", " + (h & 255) + ")";
            a.style.paddingLeft = q / v + "px";
            a.style.paddingRight = q / v + "px";
            a.style.textAlign = A ? "center" : "start";
            n ? document.activeElement != a && a.focus() : document.activeElement == a && a.blur()
        }
        ,
        4395935: a => {
            document.getElementById("textInputContainer").removeChild(ka[a]);
            ka[a] = null;
            Lb.push(a)
        }
        ,
        4396078: (a, b) => {
            ka[a].value = z(b)
        }
        ,
        4396139: (a, b, c) => {
            a = ka[a];
            "backward" == a.selectionDirection ? (B[b >> 2] = a.selectionEnd,
            B[c >> 2] = a.selectionStart) : (B[b >> 2] = a.selectionStart,
            B[c >> 2] = a.selectionEnd)
        }
        ,
        4396365: (a, b, c) => {
            a = ka[a];
            b > c ? (a.selectionStart = c,
            a.selectionEnd = b,
            a.selectionDirection = "backward") : b < c ? (a.selectionStart = b,
            a.selectionEnd = c,
            a.selectionDirection = "forward") : (a.selectionStart = a.selectionEnd = b,
            a.selectionDirection = "none")
        }
        ,
        4396682: (a, b) => {
            a = ka[a];
            return a.value != z(b) ? R(a.value) : 0
        }
        ,
        4396793: a => {
            a = ka[a];
            document.activeElement != a && a.focus()
        }
        ,
        4396872: () => R(navigator.userAgent),
        4396921: () => R(document.referrer),
        4396968: () => R(navigator.language),
        4397016: () => "https:" == location.protocol,
        4397058: () => "https:" == location.protocol,
        4397100: () => R(location.hostname),
        4397147: () => "undefined" != typeof window.Android,
        4397199: () => -1 != window.navigator.userAgent.indexOf("Android") && /\bwv\b/.test(window.navigator.userAgent),
        4397308: () => /webview/i.test(window.navigator.userAgent),
        4397364: () => /\(Linux; Android [0-9.]+; [^\)]*Build/i.test(window.navigator.userAgent),
        4397450: a => {
            try {
                window.location = z(a)
            } catch (b) {
                console.error(b)
            }
        }
        ,
        4397527: a => {
            try {
                window.open(z(a), "_blank").focus()
            } catch (b) {
                console.error(b)
            }
        }
        ,
        4397617: () => R(window.location.hash.slice(1)),
        4397676: () => -1 != navigator.userAgent.indexOf("iPhone") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Android") || -1 != navigator.userAgent.indexOf("Mobile") || -1 != navigator.userAgent.indexOf("Tablet"),
        4397918: () => -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Tablet"),
        4398018: () => -1 != navigator.userAgent.indexOf("iPhone") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Macintosh"),
        4398168: () => window.innerWidth < window.innerHeight,
        4398219: a => {
            var b = z(a);
            setTimeout(function() {
                window.onbeforeunload = null;
                var c = new URL(window.location);
                c.hash = "";
                c.searchParams.set("cp6_web_hash", b);
                window.location = c
            }, 500)
        }
        ,
        4398444: () => {
            setTimeout(sd, 500)
        }
        ,
        4398477: a => xa(encodeURIComponent(z(a))),
        4398540: () => R((new URL(window.location)).searchParams.get("state")),
        4398622: () => R((new URL(window.location)).searchParams.get("code")),
        4398703: a => {
            a = new URL(z(a));
            var b = new URL(window.location)
              , c = !1;
            a.searchParams.forEach(function(d, e) {
                -1 == b.searchParams.getAll(e).indexOf(d) && (c = !0)
            });
            return c ? !1 : !0
        }
        ,
        4398971: () => {
            try {
                var a = new URL(window.location);
                a.searchParams.delete("state");
                a.searchParams.delete("code");
                a.searchParams.delete("oauth2");
                window.history.replaceState({}, document.title, a)
            } catch (b) {
                console.error(b)
            }
        }
        ,
        4399204: () => {
            if (!document.referrer)
                return !1;
            var a = (new URL(document.referrer)).host;
            if ("florr.io" == a || -1 == a.indexOf("florr"))
                return !1;
            window.top.location = "https://florr.io/";
            return !0
        }
        ,
        4399430: () => {
            if (window == window.top || window.parent == window.top)
                return !1;
            window.top.location = "https://florr.io/";
            return !0
        }
        ,
        4399560: () => {
            try {
                window.screen.orientation.lock("landscape").catch(function() {})
            } catch (a) {}
        }
        ,
        4399647: () => {
            function a() {
                console.log("%cDO NOT PASTE ANYTHING IN HERE. IF YOU DIDN'T WRITE THE CODE, YOU DON'T KNOW WHAT IT DOES. IT MIGHT CAUSE YOUR ACCOUNT TO GET BANNED. YOU HAVE BEEN WARNED. DO NOT TRUST OTHERS.", "background: #f00; color: #fff; border-radius: 2px; padding: 2px;")
            }
            setInterval(a, 5E3);
            a()
        }
        ,
        4399956: (a, b) => {
            td(a, b)
        }
        ,
        4399986: a => !!(z(a)in window),
        4400029: (a, b, c) => !!window[z(a)][z(b)][z(c)],
        4400104: (a, b, c) => !!window[z(a)][z(b)][z(c)],
        4400179: (a, b, c) => !!window[z(a)][z(b)][z(c)],
        4400254: (a, b, c) => !!window[z(a)][z(b)][z(c)],
        4400329: (a, b, c) => !!window[z(a)][z(b)](z(c)),
        4400404: (a, b, c) => 0 < window[z(a)][z(b)](z(c)).length,
        4400488: (a, b, c) => {
            a = x[a];
            if (!a)
                return !1;
            b = a[z(b)];
            if (!b)
                return !1;
            a = b.__proto__;
            try {
                b.__proto__ = Object.create(b),
                b++
            } catch (d) {
                return -1 != (d + "").indexOf(z(c))
            } finally {
                try {
                    b.__proto__ = a
                } catch (d) {}
            }
            return !1
        }
        ,
        4400800: (a, b, c) => {
            a = window[z(a)][z(b)][z(c)];
            return !("function" == typeof a && Vh.apply(a).indexOf(!0))
        }
        ,
        4400892: (a, b, c) => {
            window[z(c)](z(a), function(d) {
                Pb(d[z(b)])
            })
        }
        ,
        4400988: (a, b, c) => {
            window[z(c)](z(a), function(d) {
                Pb(d[z(b)])
            })
        }
        ,
        4401084: a => {
            a = new RegExp(z(a));
            for (var b in window)
                if (a.test(b))
                    return !0;
            return !1
        }
        ,
        4401191: (a, b) => !!window[z(a)][z(b)],
        4401248: () => !!(window.googletag && "undefined" != typeof window.google_srt && window.aiptag && window.aiptag.cmd && window.aiptag.cmd.player && window.aiptag.cmd.player.push && window.aiptag.adplayer && window.aiptag.adplayer.startPreRoll),
        4401539: () => {
            var a = document.getElementById("canvas")
              , b = document.createElement("canvas");
            b.id = "canvasOverlay";
            a.parentNode.insertBefore(b, a.nextSibling)
        }
        ,
        4401748: () => document.documentElement.clientWidth || window.innerWidth,
        4401818: () => document.documentElement.clientHeight || window.innerHeight,
        4401890: () => {
            var a = document.getElementById("canvas")
              , b = document.getElementById("canvasOverlay");
            b.width != a.width && (b.width = a.width);
            b.height != a.height && (b.height = a.height)
        }
        ,
        4402160: (a, b, c) => {
            m[b >> 2] = x[a].canvas.width;
            m[c >> 2] = x[a].canvas.height
        }
        ,
        4402263: a => {
            document.getElementById("canvas").dataset.fakeLandscape = a ? "true" : "false";
            document.getElementById("textInputContainer").dataset.fakeLandscape = a ? "true" : "false"
        }
        ,
        4402479: () => "undefined" != typeof performance && performance.now,
        4402543: () => performance.now(),
        4402573: () => Date.now(),
        4402596: (a, b) => {
            window.localStorage[z(a)] = z(b)
        }
        ,
        4402658: a => {
            delete window.localStorage[z(a)]
        }
        ,
        4402708: a => R(window.localStorage[z(a)] || null),
        4402783: a => {
            a = z(a);
            var b = new WebSocket(a);
            (new URL(a)).hostname != (new URL(b.url)).hostname && (document.getElementById("loading").style.display = "none",
            document.getElementById("unsupported").style.display = "none",
            document.getElementById("errorDialog").style.display = "block",
            document.getElementById("canvas").style.display = "none");
            b.binaryType = "arraybuffer";
            b.vh = [];
            b.onopen = function() {
                b.vh.push([2, 0, 0]);
                Sa()
            }
            ;
            b.onerror = function() {
                b.vh.push([3, 0, 0]);
                Sa()
            }
            ;
            b.onclose = function() {
                b.vh.push([4, 0, 0]);
                Sa()
            }
            ;
            b.onmessage = function(c) {
                c = new Uint8Array(c.data);
                var d = ba(c.length);
                Z.set(c, d);
                b.vh.push([1, d, c.length]);
                Sa()
            }
            ;
            for (a = 0; a < na.length; ++a)
                if (null == na[a])
                    return na[a] = b,
                    a;
            na.push(b);
            return na.length - 1
        }
        ,
        4403536: a => {
            var b = na[a];
            b.onopen = b.onclose = b.onmessage = b.onerror = function() {}
            ;
            for (var c = 0; c < b.vh.length; ++c)
                wa(b.vh[c][1]);
            b.vh = null;
            try {
                b.close()
            } catch (d) {}
            na[a] = null
        }
        ,
        4403762: a => 1 == na[a].readyState,
        4403806: (a, b, c) => {
            a = na[a];
            if (1 != a.readyState)
                return 0;
            try {
                a.send(Z.subarray(b, b + c))
            } catch (d) {
                return 0
            }
            return 1
        }
        ,
        4403943: (a, b, c) => {
            a = na[a];
            if (0 == a.vh.length)
                return 0;
            a = a.vh.shift();
            B[b >> 2] = a[1];
            m[c >> 2] = a[2];
            return a[0]
        }
        ,
        4404095: () => "fontBoundingBoxDescent"in window.TextMetrics.prototype,
        4404164: a => {
            document.documentElement.lang = z(a).replace(/_/g, "-")
        }
        ,
        4404237: () => R(window.navigator.languages.join(",")),
        4404303: a => {
            document.documentElement.lang = z(a).replace(/_/g, "-")
        }
        ,
        4404376: () => {
            window.florrio = window.florrio || {};
            window.florrio.utils = window.florrio.utils || {};
            window.florrio.utils.uploadCustomLang = function() {
                window.showOpenFilePicker({
                    id: "custom-lang-upload",
                    multiple: !0,
                    excludeAcceptAllOption: !0,
                    types: [{
                        description: "Translation files",
                        accept: {
                            "text/plain": [".txt"]
                        }
                    }]
                }).then(async function(a) {
                    a = (await Promise.all(a.map(async function(b) {
                        b = await b.getFile();
                        return "changelog.txt" == b.name ? (localStorage.setItem("florrio_custom_changelog", await b.text()),
                        "") : await b.text()
                    }))).join("\n");
                    localStorage.setItem("florrio_custom_lang", a);
                    window.location.reload(!0)
                }).catch(function(a) {
                    console.error(a)
                })
            }
        }
        ,
        4405169: () => {
            try {
                return window.localStorage,
                !1
            } catch (a) {
                return !0
            }
        }
        ,
        4405241: () => "zh" == window.navigator.language.slice(0, 2),
        4405298: () => R(navigator.userAgent),
        4405347: () => R(navigator.language),
        4405395: () => R(navigator.vendor || ""),
        4405447: () => R((navigator.languages || []).join(",")),
        4405514: () => R(Array.prototype.slice.apply(window.navigator.mimeTypes).map(function(a) {
            return a.type + "," + a.suffixes
        }).join(";")),
        4405663: () => R(Array.prototype.slice.apply(navigator.plugins).map(function(a) {
            return a.name
        }).join(",")),
        4405784: () => R((new Date("August 1, 2000 00:00:00")).getTimezoneOffset().toString()),
        4405882: () => R(screen.width + "x" + screen.height + "x" + window.devicePixelRatio),
        4405978: () => "https:" == location.protocol,
        4406020: () => "undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext ? !0 : !1,
        4406167: () => "undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? !0 : !1,
        4406401: a => {
            "undefined" === typeof l.SDL2 && (l.SDL2 = {});
            var b = l.SDL2;
            a ? b.capture = {} : b.audio = {};
            b.Qg || ("undefined" !== typeof AudioContext ? b.Qg = new AudioContext : "undefined" !== typeof webkitAudioContext && (b.Qg = new webkitAudioContext),
            b.Qg && Fh(b.Qg));
            return b.Qg === F ? -1 : 0
        }
        ,
        4406894: () => l.SDL2.Qg.sampleRate,
        4406962: (a, b, c, d) => {
            function e() {}
            function f(n) {
                h.capture.Ci !== F && (clearTimeout(h.capture.Ci),
                h.capture.Ci = F);
                h.capture.Wi = h.Qg.createMediaStreamSource(n);
                h.capture.ah = h.Qg.createScriptProcessor(b, a, 1);
                h.capture.ah.onaudioprocess = function(q) {
                    h !== F && h.capture !== F && (q.outputBuffer.getChannelData(0).fill(0),
                    h.capture.lj = q.inputBuffer,
                    yb("vi", c, [d]))
                }
                ;
                h.capture.Wi.connect(h.capture.ah);
                h.capture.ah.connect(h.Qg.destination);
                h.capture.stream = n
            }
            var h = l.SDL2;
            h.capture.aj = h.Qg.createBuffer(a, b, h.Qg.sampleRate);
            h.capture.aj.getChannelData(0).fill(0);
            h.capture.Ci = setTimeout(function() {
                h.capture.lj = h.capture.aj;
                yb("vi", c, [d])
            }, b / h.Qg.sampleRate * 1E3);
            navigator.mediaDevices !== F && navigator.mediaDevices.getUserMedia !== F ? navigator.mediaDevices.getUserMedia({
                audio: !0,
                video: !1
            }).then(f).catch(e) : navigator.webkitGetUserMedia !== F && navigator.webkitGetUserMedia({
                audio: !0,
                video: !1
            }, f, e)
        }
        ,
        4408614: (a, b, c, d) => {
            var e = l.SDL2;
            e.audio.ah = e.Qg.createScriptProcessor(b, 0, a);
            e.audio.ah.onaudioprocess = function(f) {
                e !== F && e.audio !== F && (e.audio.ik = f.outputBuffer,
                yb("vi", c, [d]))
            }
            ;
            e.audio.ah.connect(e.Qg.destination)
        }
        ,
        4409024: (a, b) => {
            for (var c = l.SDL2, d = c.capture.lj.numberOfChannels, e = 0; e < d; ++e) {
                var f = c.capture.lj.getChannelData(e);
                if (f.length != b)
                    throw "Web Audio capture buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
                if (1 == d)
                    for (var h = 0; h < b; ++h)
                        zc(a + 4 * h, f[h], "float");
                else
                    for (h = 0; h < b; ++h)
                        zc(a + 4 * (h * d + e), f[h], "float")
            }
        }
        ,
        4409629: (a, b) => {
            for (var c = l.SDL2, d = c.audio.ik.numberOfChannels, e = 0; e < d; ++e) {
                var f = c.audio.ik.getChannelData(e);
                if (f.length != b)
                    throw "Web Audio output buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
                for (var h = 0; h < b; ++h)
                    f[h] = J[a + (h * d + e << 2) >> 2]
            }
        }
        ,
        4410109: a => {
            var b = l.SDL2;
            if (a) {
                b.capture.Ci !== F && clearTimeout(b.capture.Ci);
                if (b.capture.stream !== F) {
                    a = b.capture.stream.getAudioTracks();
                    for (var c = 0; c < a.length; c++)
                        b.capture.stream.removeTrack(a[c]);
                    b.capture.stream = F
                }
                b.capture.ah !== F && (b.capture.ah.onaudioprocess = function() {}
                ,
                b.capture.ah.disconnect(),
                b.capture.ah = F);
                b.capture.Wi !== F && (b.capture.Wi.disconnect(),
                b.capture.Wi = F);
                b.capture.aj !== F && (b.capture.aj = F);
                b.capture = F
            } else
                b.audio.ah != F && (b.audio.ah.disconnect(),
                b.audio.ah = F),
                b.audio = F;
            b.Qg !== F && b.audio === F && b.capture === F && (b.Qg.close(),
            b.Qg = F)
        }
        ,
        4411281: (a, b, c) => {
            l.SDL2 || (l.SDL2 = {});
            var d = l.SDL2;
            d.ol !== l.canvas && (d.lh = l.createContext(l.canvas, !1, !0),
            d.ol = l.canvas);
            if (d.w !== a || d.Ml !== b || d.Pl !== d.lh)
                d.image = d.lh.createImageData(a, b),
                d.w = a,
                d.Ml = b,
                d.Pl = d.lh;
            a = d.image.data;
            b = c >> 2;
            var e = 0;
            if ("undefined" !== typeof CanvasPixelArray && a instanceof CanvasPixelArray)
                for (c = a.length; e < c; ) {
                    var f = m[b];
                    a[e] = f & 255;
                    a[e + 1] = f >> 8 & 255;
                    a[e + 2] = f >> 16 & 255;
                    a[e + 3] = 255;
                    b++;
                    e += 4
                }
            else if (d.sl !== a && (d.rl = new Int32Array(a.buffer),
            d.tl = new Uint8Array(a.buffer),
            d.sl = a),
            a = d.rl,
            c = a.length,
            a.set(m.subarray(b, b + c)),
            a = d.tl,
            b = 3,
            e = b + 4 * c,
            0 == c % 8)
                for (; b < e; )
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0;
            else
                for (; b < e; )
                    a[b] = 255,
                    b = b + 4 | 0;
            d.lh.putImageData(d.image, 0, 0)
        }
        ,
        4412750: (a, b, c, d, e) => {
            var f = document.createElement("canvas");
            f.width = a;
            f.height = b;
            var h = f.getContext("2d");
            a = h.createImageData(a, b);
            b = a.data;
            e >>= 2;
            var n = 0, q;
            if ("undefined" !== typeof CanvasPixelArray && b instanceof CanvasPixelArray)
                for (q = b.length; n < q; ) {
                    var u = m[e];
                    b[n] = u & 255;
                    b[n + 1] = u >> 8 & 255;
                    b[n + 2] = u >> 16 & 255;
                    b[n + 3] = u >> 24 & 255;
                    e++;
                    n += 4
                }
            else
                b = new Int32Array(b.buffer),
                q = b.length,
                b.set(m.subarray(e, e + q));
            h.putImageData(a, 0, 0);
            c = 0 === c && 0 === d ? "url(" + f.toDataURL() + "), auto" : "url(" + f.toDataURL() + ") " + c + " " + d + ", auto";
            d = ba(c.length + 1);
            N(c, d, c.length + 1);
            return d
        }
        ,
        4413739: a => {
            l.canvas && (l.canvas.style.cursor = z(a))
        }
        ,
        4413822: () => {
            l.canvas && (l.canvas.style.cursor = "none")
        }
        ,
        4413891: () => window.innerWidth,
        4413921: () => window.innerHeight,
        4413952: (a, b) => {
            alert(z(a) + "\n\n" + z(b))
        }
        ,
        4414009: () => {
            var a = document.getElementById("xsolla-container");
            if (a) {
                var b = document.getElementById("xsolla-container2");
                b && (delete window.xsolla_window,
                delete a.dataset.active,
                b.removeChild(document.getElementById("xsolla-iframe")))
            }
        }
        ,
        4414315: () => {
            var a = document.getElementById("xsolla-container");
            return a ? !!a.dataset.active : !1
        }
        ,
        4414444: () => R(window.navigator.language || ""),
        4414505: () => R((window.navigator.languages || []).join(",")),
        4414577: () => (new Date).getTimezoneOffset(),
        4414620: () => R(window.navigator.platform || ""),
        4414681: () => R((window.navigator.userAgent || "").replace(/[0-9.]/gm, "")),
        4414769: () => R(window.navigator.vendor || ""),
        4414828: () => window.navigator.hardwareConcurrency,
        4414877: a => {
            var b = document.getElementById("xsolla-container");
            if (b) {
                var c = document.getElementById("xsolla-container2");
                if (c) {
                    var d = document.createElement("iframe");
                    d.setAttribute("id", "xsolla-iframe");
                    d.setAttribute("src", z(a));
                    window.xsolla_window = d.contentWindow;
                    window.xsolla_listener_setup || (window.xsolla_listener_setup = !0,
                    window.addEventListener("message", function(e) {
                        e.source == window.xsolla_window && console.log("Received xsolla message:", e)
                    }),
                    (a = document.getElementById("xsolla-close")) && a.addEventListener("click", rd));
                    b.dataset.active = "true";
                    c.appendChild(d)
                }
            }
        }
    }, Za = [], M = {
        Dj: a => "/" === a.charAt(0),
        vm: a => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1),
        Jj: (a, b) => {
            for (var c = 0, d = a.length - 1; 0 <= d; d--) {
                var e = a[d];
                "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1),
                c++) : c && (a.splice(d, 1),
                c--)
            }
            if (b)
                for (; c; c--)
                    a.unshift("..");
            return a
        }
        ,
        normalize: a => {
            var b = M.Dj(a)
              , c = "/" === a.substr(-1);
            (a = M.Jj(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
            a && c && (a += "/");
            return (b ? "/" : "") + a
        }
        ,
        dirname: a => {
            var b = M.vm(a);
            a = b[0];
            b = b[1];
            if (!a && !b)
                return ".";
            b && (b = b.substr(0, b.length - 1));
            return a + b
        }
        ,
        Ah: a => {
            if ("/" === a)
                return "/";
            a = M.normalize(a);
            a = a.replace(/\/$/, "");
            var b = a.lastIndexOf("/");
            return -1 === b ? a : a.substr(b + 1)
        }
        ,
        join: function() {
            return M.normalize(Array.prototype.slice.call(arguments, 0).join("/"))
        },
        Jh: (a, b) => M.normalize(a + "/" + b)
    }, pa = {
        resolve: function() {
            for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
                b = 0 <= c ? arguments[c] : g.Mi();
                if ("string" != typeof b)
                    throw new TypeError("Arguments to path.resolve must be strings");
                if (!b)
                    return "";
                a = b + "/" + a;
                b = M.Dj(b)
            }
            a = M.Jj(a.split("/").filter(d => !!d), !b).join("/");
            return (b ? "/" : "") + a || "."
        },
        Ok: (a, b) => {
            function c(h) {
                for (var n = 0; n < h.length && "" === h[n]; n++)
                    ;
                for (var q = h.length - 1; 0 <= q && "" === h[q]; q--)
                    ;
                return n > q ? [] : h.slice(n, q - n + 1)
            }
            a = pa.resolve(a).substr(1);
            b = pa.resolve(b).substr(1);
            a = c(a.split("/"));
            b = c(b.split("/"));
            for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++)
                if (a[f] !== b[f]) {
                    e = f;
                    break
                }
            d = [];
            for (f = e; f < a.length; f++)
                d.push("..");
            d = d.concat(b.slice(e));
            return d.join("/")
        }
    }, ra = {
        Vk: [],
        wh: function() {},
        An: function() {},
        register: function(a, b) {
            ra.Vk[a] = {
                input: [],
                Yg: [],
                bi: b
            };
            g.Oj(a, ra.Kg)
        },
        Kg: {
            open: function(a) {
                var b = ra.Vk[a.node.yi];
                if (!b)
                    throw new g.Eg(43);
                a.Pg = b;
                a.seekable = !1
            },
            close: function(a) {
                a.Pg.bi.flush(a.Pg)
            },
            flush: function(a) {
                a.Pg.bi.flush(a.Pg)
            },
            read: function(a, b, c, d) {
                if (!a.Pg || !a.Pg.bi.xk)
                    throw new g.Eg(60);
                for (var e = 0, f = 0; f < d; f++) {
                    try {
                        var h = a.Pg.bi.xk(a.Pg)
                    } catch (n) {
                        throw new g.Eg(29);
                    }
                    if (h === F && 0 === e)
                        throw new g.Eg(6);
                    if (null === h || h === F)
                        break;
                    e++;
                    b[c + f] = h
                }
                e && (a.node.timestamp = Date.now());
                return e
            },
            write: function(a, b, c, d) {
                if (!a.Pg || !a.Pg.bi.Lj)
                    throw new g.Eg(60);
                try {
                    for (var e = 0; e < d; e++)
                        a.Pg.bi.Lj(a.Pg, b[c + e])
                } catch (f) {
                    throw new g.Eg(29);
                }
                d && (a.node.timestamp = Date.now());
                return e
            }
        },
        vl: {
            xk: function(a) {
                if (!a.input.length) {
                    var b = null;
                    "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "),
                    null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(),
                    null !== b && (b += "\n"));
                    if (!b)
                        return null;
                    a.input = Ab(b, !0)
                }
                return a.input.shift()
            },
            Lj: function(a, b) {
                null === b || 10 === b ? (Ka(ya(a.Yg, 0)),
                a.Yg = []) : 0 != b && a.Yg.push(b)
            },
            flush: function(a) {
                a.Yg && 0 < a.Yg.length && (Ka(ya(a.Yg, 0)),
                a.Yg = [])
            }
        },
        ul: {
            Lj: function(a, b) {
                null === b || 10 === b ? (ea(ya(a.Yg, 0)),
                a.Yg = []) : 0 != b && a.Yg.push(b)
            },
            flush: function(a) {
                a.Yg && 0 < a.Yg.length && (ea(ya(a.Yg, 0)),
                a.Yg = [])
            }
        }
    }, H = {
        sh: null,
        Og: function() {
            return H.createNode(null, "/", 16895, 0)
        },
        createNode: function(a, b, c, d) {
            if (g.Tl(c) || g.Ul(c))
                throw new g.Eg(63);
            H.sh || (H.sh = {
                dir: {
                    node: {
                        ph: H.Hg.ph,
                        Wg: H.Hg.Wg,
                        Kh: H.Hg.Kh,
                        yh: H.Hg.yh,
                        Ai: H.Hg.Ai,
                        fi: H.Hg.fi,
                        Bi: H.Hg.Bi,
                        zi: H.Hg.zi,
                        Fh: H.Hg.Fh
                    },
                    stream: {
                        qh: H.Kg.qh
                    }
                },
                file: {
                    node: {
                        ph: H.Hg.ph,
                        Wg: H.Hg.Wg
                    },
                    stream: {
                        qh: H.Kg.qh,
                        read: H.Kg.read,
                        write: H.Kg.write,
                        ji: H.Kg.ji,
                        Xh: H.Kg.Xh,
                        $h: H.Kg.$h
                    }
                },
                link: {
                    node: {
                        ph: H.Hg.ph,
                        Wg: H.Hg.Wg,
                        Oh: H.Hg.Oh
                    },
                    stream: {}
                },
                ek: {
                    node: {
                        ph: H.Hg.ph,
                        Wg: H.Hg.Wg
                    },
                    stream: g.hl
                }
            });
            c = g.createNode(a, b, c, d);
            g.Vg(c.mode) ? (c.Hg = H.sh.dir.node,
            c.Kg = H.sh.dir.stream,
            c.Jg = {}) : g.isFile(c.mode) ? (c.Hg = H.sh.file.node,
            c.Kg = H.sh.file.stream,
            c.Ng = 0,
            c.Jg = null) : g.si(c.mode) ? (c.Hg = H.sh.link.node,
            c.Kg = H.sh.link.stream) : g.Oi(c.mode) && (c.Hg = H.sh.ek.node,
            c.Kg = H.sh.ek.stream);
            c.timestamp = Date.now();
            a && (a.Jg[b] = c,
            a.timestamp = c.timestamp);
            return c
        },
        Ym: function(a) {
            return a.Jg ? a.Jg.subarray ? a.Jg.subarray(0, a.Ng) : new Uint8Array(a.Jg) : new Uint8Array(0)
        },
        pk: function(a, b) {
            var c = a.Jg ? a.Jg.length : 0;
            c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0),
            0 != c && (b = Math.max(b, 256)),
            c = a.Jg,
            a.Jg = new Uint8Array(b),
            0 < a.Ng && a.Jg.set(c.subarray(0, a.Ng), 0))
        },
        nm: function(a, b) {
            if (a.Ng != b)
                if (0 == b)
                    a.Jg = null,
                    a.Ng = 0;
                else {
                    var c = a.Jg;
                    a.Jg = new Uint8Array(b);
                    c && a.Jg.set(c.subarray(0, Math.min(b, a.Ng)));
                    a.Ng = b
                }
        },
        Hg: {
            ph: function(a) {
                var b = {};
                b.yl = g.Oi(a.mode) ? a.id : 1;
                b.Bj = a.id;
                b.mode = a.mode;
                b.cm = 1;
                b.uid = 0;
                b.Ll = 0;
                b.yi = a.yi;
                g.Vg(a.mode) ? b.size = 4096 : g.isFile(a.mode) ? b.size = a.Ng : b.size = g.si(a.mode) ? a.link.length : 0;
                b.bk = new Date(a.timestamp);
                b.Hk = new Date(a.timestamp);
                b.hk = new Date(a.timestamp);
                b.cl = 4096;
                b.dl = Math.ceil(b.size / b.cl);
                return b
            },
            Wg: function(a, b) {
                b.mode !== F && (a.mode = b.mode);
                b.timestamp !== F && (a.timestamp = b.timestamp);
                b.size !== F && H.nm(a, b.size)
            },
            Kh: function() {
                throw g.tj[44];
            },
            yh: function(a, b, c, d) {
                return H.createNode(a, b, c, d)
            },
            Ai: function(a, b, c) {
                if (g.Vg(a.mode)) {
                    try {
                        var d = g.xh(b, c)
                    } catch (f) {}
                    if (d)
                        for (var e in d.Jg)
                            throw new g.Eg(55);
                }
                delete a.parent.Jg[a.name];
                a.parent.timestamp = Date.now();
                a.name = c;
                b.Jg[c] = a;
                b.timestamp = a.parent.timestamp;
                a.parent = b
            },
            fi: function(a, b) {
                delete a.Jg[b];
                a.timestamp = Date.now()
            },
            Bi: function(a, b) {
                var c = g.xh(a, b), d;
                for (d in c.Jg)
                    throw new g.Eg(55);
                delete a.Jg[b];
                a.timestamp = Date.now()
            },
            zi: function(a) {
                var b = [".", ".."], c;
                for (c in a.Jg)
                    a.Jg.hasOwnProperty(c) && b.push(c);
                return b
            },
            Fh: function(a, b, c) {
                a = H.createNode(a, b, 41471, 0);
                a.link = c;
                return a
            },
            Oh: function(a) {
                if (!g.si(a.mode))
                    throw new g.Eg(28);
                return a.link
            }
        },
        Kg: {
            read: function(a, b, c, d, e) {
                var f = a.node.Jg;
                if (e >= a.node.Ng)
                    return 0;
                a = Math.min(a.node.Ng - e, d);
                if (8 < a && f.subarray)
                    b.set(f.subarray(e, e + a), c);
                else
                    for (d = 0; d < a; d++)
                        b[c + d] = f[e + d];
                return a
            },
            write: function(a, b, c, d, e, f) {
                if (!d)
                    return 0;
                a = a.node;
                a.timestamp = Date.now();
                if (b.subarray && (!a.Jg || a.Jg.subarray)) {
                    if (f)
                        return a.Jg = b.subarray(c, c + d),
                        a.Ng = d;
                    if (0 === a.Ng && 0 === e)
                        return a.Jg = b.slice(c, c + d),
                        a.Ng = d;
                    if (e + d <= a.Ng)
                        return a.Jg.set(b.subarray(c, c + d), e),
                        d
                }
                H.pk(a, e + d);
                if (a.Jg.subarray && b.subarray)
                    a.Jg.set(b.subarray(c, c + d), e);
                else
                    for (f = 0; f < d; f++)
                        a.Jg[e + f] = b[c + f];
                a.Ng = Math.max(a.Ng, e + d);
                return d
            },
            qh: function(a, b, c) {
                1 === c ? b += a.position : 2 === c && g.isFile(a.node.mode) && (b += a.node.Ng);
                if (0 > b)
                    throw new g.Eg(28);
                return b
            },
            ji: function(a, b, c) {
                H.pk(a.node, b + c);
                a.node.Ng = Math.max(a.node.Ng, b + c)
            },
            Xh: function(a, b, c, d, e) {
                if (!g.isFile(a.node.mode))
                    throw new g.Eg(43);
                a = a.node.Jg;
                if (e & 2 || a.buffer !== od) {
                    if (0 < c || c + b < a.length)
                        a = a.subarray ? a.subarray(c, c + b) : Array.prototype.slice.call(a, c, c + b);
                    c = !0;
                    fa();
                    b = void 0;
                    if (!b)
                        throw new g.Eg(48);
                    Z.set(a, b)
                } else
                    c = !1,
                    b = a.byteOffset;
                return {
                    tn: b,
                    Hm: c
                }
            },
            $h: function(a, b, c, d, e) {
                if (!g.isFile(a.node.mode))
                    throw new g.Eg(43);
                if (e & 2)
                    return 0;
                H.Kg.write(a, b, 0, d, c, !1);
                return 0
            }
        }
    }, g = {
        root: null,
        vi: [],
        lk: {},
        streams: [],
        am: 1,
        rh: null,
        jk: "/",
        Aj: !1,
        Ak: !0,
        Eg: null,
        tj: {},
        Dl: null,
        bj: 0,
        Mg: (a, b={}) => {
            a = pa.resolve(g.Mi(), a);
            if (!a)
                return {
                    path: "",
                    node: null
                };
            b = Object.assign({
                rj: !0,
                Nj: 0
            }, b);
            if (8 < b.Nj)
                throw new g.Eg(32);
            a = M.Jj(a.split("/").filter(h => !!h), !1);
            for (var c = g.root, d = "/", e = 0; e < a.length; e++) {
                var f = e === a.length - 1;
                if (f && b.parent)
                    break;
                c = g.xh(c, a[e]);
                d = M.Jh(d, a[e]);
                g.Ih(c) && (!f || f && b.rj) && (c = c.ui.root);
                if (!f || b.oh)
                    for (f = 0; g.si(c.mode); )
                        if (c = g.Oh(d),
                        d = pa.resolve(M.dirname(d), c),
                        c = g.Mg(d, {
                            Nj: b.Nj + 1
                        }).node,
                        40 < f++)
                            throw new g.Eg(32);
            }
            return {
                path: d,
                node: c
            }
        }
        ,
        Ch: a => {
            for (var b; ; ) {
                if (g.Pi(a))
                    return a = a.Og.Gk,
                    b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
                b = b ? a.name + "/" + b : a.name;
                a = a.parent
            }
        }
        ,
        yj: (a, b) => {
            for (var c = 0, d = 0; d < b.length; d++)
                c = (c << 5) - c + b.charCodeAt(d) | 0;
            return (a + c >>> 0) % g.rh.length
        }
        ,
        yk: a => {
            var b = g.yj(a.parent.id, a.name);
            a.Mh = g.rh[b];
            g.rh[b] = a
        }
        ,
        zk: a => {
            var b = g.yj(a.parent.id, a.name);
            if (g.rh[b] === a)
                g.rh[b] = a.Mh;
            else
                for (b = g.rh[b]; b; ) {
                    if (b.Mh === a) {
                        b.Mh = a.Mh;
                        break
                    }
                    b = b.Mh
                }
        }
        ,
        xh: (a, b) => {
            var c = g.Wl(a);
            if (c)
                throw new g.Eg(c,a);
            for (c = g.rh[g.yj(a.id, b)]; c; c = c.Mh) {
                var d = c.name;
                if (c.parent.id === a.id && d === b)
                    return c
            }
            return g.Kh(a, b)
        }
        ,
        createNode: (a, b, c, d) => {
            a = new g.al(a,b,c,d);
            g.yk(a);
            return a
        }
        ,
        pj: a => {
            g.zk(a)
        }
        ,
        Pi: a => a === a.parent,
        Ih: a => !!a.ui,
        isFile: a => 32768 === (a & 61440),
        Vg: a => 16384 === (a & 61440),
        si: a => 40960 === (a & 61440),
        Oi: a => 8192 === (a & 61440),
        Tl: a => 24576 === (a & 61440),
        Ul: a => 4096 === (a & 61440),
        an: a => 49152 === (a & 49152),
        Fl: {
            r: 0,
            "r+": 2,
            w: 577,
            "w+": 578,
            a: 1089,
            "a+": 1090
        },
        Zl: a => {
            var b = g.Fl[a];
            if ("undefined" == typeof b)
                throw Error("Unknown file open mode: " + a);
            return b
        }
        ,
        qk: a => {
            var b = ["r", "w", "rw"][a & 3];
            a & 512 && (b += "w");
            return b
        }
        ,
        Nh: (a, b) => {
            if (g.Ak)
                return 0;
            if (!b.includes("r") || a.mode & 292) {
                if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73))
                    return 2
            } else
                return 2;
            return 0
        }
        ,
        Wl: a => {
            var b = g.Nh(a, "x");
            return b ? b : a.Hg.Kh ? 0 : 2
        }
        ,
        Hj: (a, b) => {
            try {
                return g.xh(a, b),
                20
            } catch (c) {}
            return g.Nh(a, "wx")
        }
        ,
        Vi: (a, b, c) => {
            try {
                var d = g.xh(a, b)
            } catch (e) {
                return e.nh
            }
            if (a = g.Nh(a, "wx"))
                return a;
            if (c) {
                if (!g.Vg(d.mode))
                    return 54;
                if (g.Pi(d) || g.Ch(d) === g.Mi())
                    return 10
            } else if (g.Vg(d.mode))
                return 31;
            return 0
        }
        ,
        Xl: (a, b) => a ? g.si(a.mode) ? 32 : g.Vg(a.mode) && ("r" !== g.qk(b) || b & 512) ? 31 : g.Nh(a, g.qk(b)) : 44,
        bl: 4096,
        bm: (a=0, b=g.bl) => {
            for (; a <= b; a++)
                if (!g.streams[a])
                    return a;
            throw new g.Eg(33);
        }
        ,
        Vh: a => g.streams[a],
        gk: (a, b, c) => {
            g.Gi || (g.Gi = function() {
                this.$i = {}
            }
            ,
            g.Gi.prototype = {},
            Object.defineProperties(g.Gi.prototype, {
                object: {
                    get: function() {
                        return this.node
                    },
                    set: function(d) {
                        this.node = d
                    }
                },
                flags: {
                    get: function() {
                        return this.$i.flags
                    },
                    set: function(d) {
                        this.$i.flags = d
                    }
                },
                position: {
                    get: function() {
                        return this.$i.position
                    },
                    set: function(d) {
                        this.$i.position = d
                    }
                }
            }));
            a = Object.assign(new g.Gi, a);
            b = g.bm(b, c);
            a.ni = b;
            return g.streams[b] = a
        }
        ,
        il: a => {
            g.streams[a] = null
        }
        ,
        hl: {
            open: a => {
                a.Kg = g.Gl(a.node.yi).Kg;
                a.Kg.open && a.Kg.open(a)
            }
            ,
            qh: () => {
                throw new g.Eg(70);
            }
        },
        Fj: a => a >> 8,
        hn: a => a & 255,
        Lh: (a, b) => a << 8 | b,
        Oj: (a, b) => {
            g.lk[a] = {
                Kg: b
            }
        }
        ,
        Gl: a => g.lk[a],
        wk: a => {
            var b = [];
            for (a = [a]; a.length; ) {
                var c = a.pop();
                b.push(c);
                a.push.apply(a, c.vi)
            }
            return b
        }
        ,
        Tk: (a, b) => {
            function c(h) {
                g.bj--;
                return b(h)
            }
            function d(h) {
                if (h) {
                    if (!d.zl)
                        return d.zl = !0,
                        c(h)
                } else
                    ++f >= e.length && c(null)
            }
            "function" == typeof a && (b = a,
            a = !1);
            g.bj++;
            1 < g.bj && ea("warning: " + g.bj + " FS.syncfs operations in flight at once, probably just doing extra work");
            var e = g.wk(g.root.Og)
              , f = 0;
            e.forEach(h => {
                if (!h.type.Tk)
                    return d(null);
                h.type.Tk(h, a, d)
            }
            )
        }
        ,
        Og: (a, b, c) => {
            var d = "/" === c
              , e = !c;
            if (d && g.root)
                throw new g.Eg(10);
            if (!d && !e) {
                var f = g.Mg(c, {
                    rj: !1
                });
                c = f.path;
                f = f.node;
                if (g.Ih(f))
                    throw new g.Eg(10);
                if (!g.Vg(f.mode))
                    throw new g.Eg(54);
            }
            b = {
                type: a,
                rn: b,
                Gk: c,
                vi: []
            };
            a = a.Og(b);
            a.Og = b;
            b.root = a;
            d ? g.root = a : f && (f.ui = b,
            f.Og && f.Og.vi.push(b));
            return a
        }
        ,
        Dn: a => {
            a = g.Mg(a, {
                rj: !1
            });
            if (!g.Ih(a.node))
                throw new g.Eg(28);
            a = a.node;
            var b = a.ui
              , c = g.wk(b);
            Object.keys(g.rh).forEach(d => {
                for (d = g.rh[d]; d; ) {
                    var e = d.Mh;
                    c.includes(d.Og) && g.pj(d);
                    d = e
                }
            }
            );
            a.ui = null;
            a.Og.vi.splice(a.Og.vi.indexOf(b), 1)
        }
        ,
        Kh: (a, b) => a.Hg.Kh(a, b),
        yh: (a, b, c) => {
            var d = g.Mg(a, {
                parent: !0
            }).node;
            a = M.Ah(a);
            if (!a || "." === a || ".." === a)
                throw new g.Eg(28);
            var e = g.Hj(d, a);
            if (e)
                throw new g.Eg(e);
            if (!d.Hg.yh)
                throw new g.Eg(63);
            return d.Hg.yh(d, a, b, c)
        }
        ,
        create: (a, b) => {
            b = b !== F ? b : 438;
            return g.yh(a, b & 4095 | 32768, 0)
        }
        ,
        hh: (a, b) => {
            b = b !== F ? b : 511;
            return g.yh(a, b & 1023 | 16384, 0)
        }
        ,
        jn: (a, b) => {
            a = a.split("/");
            for (var c = "", d = 0; d < a.length; ++d)
                if (a[d]) {
                    c += "/" + a[d];
                    try {
                        g.hh(c, b)
                    } catch (e) {
                        if (20 != e.nh)
                            throw e;
                    }
                }
        }
        ,
        Xi: (a, b, c) => {
            "undefined" == typeof c && (c = b,
            b = 438);
            return g.yh(a, b | 8192, c)
        }
        ,
        Fh: (a, b) => {
            if (!pa.resolve(a))
                throw new g.Eg(44);
            var c = g.Mg(b, {
                parent: !0
            }).node;
            if (!c)
                throw new g.Eg(44);
            b = M.Ah(b);
            var d = g.Hj(c, b);
            if (d)
                throw new g.Eg(d);
            if (!c.Hg.Fh)
                throw new g.Eg(63);
            return c.Hg.Fh(c, b, a)
        }
        ,
        Ai: (a, b) => {
            var c = M.dirname(a)
              , d = M.dirname(b)
              , e = M.Ah(a)
              , f = M.Ah(b);
            var h = g.Mg(a, {
                parent: !0
            });
            var n = h.node;
            h = g.Mg(b, {
                parent: !0
            });
            h = h.node;
            if (!n || !h)
                throw new g.Eg(44);
            if (n.Og !== h.Og)
                throw new g.Eg(75);
            var q = g.xh(n, e);
            a = pa.Ok(a, d);
            if ("." !== a.charAt(0))
                throw new g.Eg(28);
            a = pa.Ok(b, c);
            if ("." !== a.charAt(0))
                throw new g.Eg(55);
            try {
                var u = g.xh(h, f)
            } catch (v) {}
            if (q !== u) {
                b = g.Vg(q.mode);
                if (e = g.Vi(n, e, b))
                    throw new g.Eg(e);
                if (e = u ? g.Vi(h, f, b) : g.Hj(h, f))
                    throw new g.Eg(e);
                if (!n.Hg.Ai)
                    throw new g.Eg(63);
                if (g.Ih(q) || u && g.Ih(u))
                    throw new g.Eg(10);
                if (h !== n && (e = g.Nh(n, "w")))
                    throw new g.Eg(e);
                g.zk(q);
                try {
                    n.Hg.Ai(q, h, f)
                } catch (v) {
                    throw v;
                } finally {
                    g.yk(q)
                }
            }
        }
        ,
        Bi: a => {
            var b = g.Mg(a, {
                parent: !0
            }).node;
            a = M.Ah(a);
            var c = g.xh(b, a)
              , d = g.Vi(b, a, !0);
            if (d)
                throw new g.Eg(d);
            if (!b.Hg.Bi)
                throw new g.Eg(63);
            if (g.Ih(c))
                throw new g.Eg(10);
            b.Hg.Bi(b, a);
            g.pj(c)
        }
        ,
        zi: a => {
            a = g.Mg(a, {
                oh: !0
            }).node;
            if (!a.Hg.zi)
                throw new g.Eg(54);
            return a.Hg.zi(a)
        }
        ,
        fi: a => {
            var b = g.Mg(a, {
                parent: !0
            }).node;
            if (!b)
                throw new g.Eg(44);
            a = M.Ah(a);
            var c = g.xh(b, a)
              , d = g.Vi(b, a, !1);
            if (d)
                throw new g.Eg(d);
            if (!b.Hg.fi)
                throw new g.Eg(63);
            if (g.Ih(c))
                throw new g.Eg(10);
            b.Hg.fi(b, a);
            g.pj(c)
        }
        ,
        Oh: a => {
            a = g.Mg(a).node;
            if (!a)
                throw new g.Eg(44);
            if (!a.Hg.Oh)
                throw new g.Eg(28);
            return pa.resolve(g.Ch(a.parent), a.Hg.Oh(a))
        }
        ,
        stat: (a, b) => {
            a = g.Mg(a, {
                oh: !b
            }).node;
            if (!a)
                throw new g.Eg(44);
            if (!a.Hg.ph)
                throw new g.Eg(63);
            return a.Hg.ph(a)
        }
        ,
        fn: a => g.stat(a, !0),
        Ji: (a, b, c) => {
            a = "string" == typeof a ? g.Mg(a, {
                oh: !c
            }).node : a;
            if (!a.Hg.Wg)
                throw new g.Eg(63);
            a.Hg.Wg(a, {
                mode: b & 4095 | a.mode & -4096,
                timestamp: Date.now()
            })
        }
        ,
        bn: (a, b) => {
            g.Ji(a, b, !0)
        }
        ,
        Um: (a, b) => {
            a = g.Vh(a);
            if (!a)
                throw new g.Eg(8);
            g.Ji(a.node, b)
        }
        ,
        dk: (a, b, c, d) => {
            a = "string" == typeof a ? g.Mg(a, {
                oh: !d
            }).node : a;
            if (!a.Hg.Wg)
                throw new g.Eg(63);
            a.Hg.Wg(a, {
                timestamp: Date.now()
            })
        }
        ,
        cn: (a, b, c) => {
            g.dk(a, b, c, !0)
        }
        ,
        Vm: (a, b, c) => {
            a = g.Vh(a);
            if (!a)
                throw new g.Eg(8);
            g.dk(a.node, b, c)
        }
        ,
        truncate: (a, b) => {
            if (0 > b)
                throw new g.Eg(28);
            a = "string" == typeof a ? g.Mg(a, {
                oh: !0
            }).node : a;
            if (!a.Hg.Wg)
                throw new g.Eg(63);
            if (g.Vg(a.mode))
                throw new g.Eg(31);
            if (!g.isFile(a.mode))
                throw new g.Eg(28);
            var c = g.Nh(a, "w");
            if (c)
                throw new g.Eg(c);
            a.Hg.Wg(a, {
                size: b,
                timestamp: Date.now()
            })
        }
        ,
        Xm: (a, b) => {
            a = g.Vh(a);
            if (!a)
                throw new g.Eg(8);
            if (0 === (a.flags & 2097155))
                throw new g.Eg(28);
            g.truncate(a.node, b)
        }
        ,
        Fn: (a, b, c) => {
            a = g.Mg(a, {
                oh: !0
            }).node;
            a.Hg.Wg(a, {
                timestamp: Math.max(b, c)
            })
        }
        ,
        open: (a, b, c) => {
            if ("" === a)
                throw new g.Eg(44);
            b = "string" == typeof b ? g.Zl(b) : b;
            c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
            if ("object" == typeof a)
                var d = a;
            else {
                a = M.normalize(a);
                try {
                    d = g.Mg(a, {
                        oh: !(b & 131072)
                    }).node
                } catch (f) {}
            }
            var e = !1;
            if (b & 64)
                if (d) {
                    if (b & 128)
                        throw new g.Eg(20);
                } else
                    d = g.yh(a, c, 0),
                    e = !0;
            if (!d)
                throw new g.Eg(44);
            g.Oi(d.mode) && (b &= -513);
            if (b & 65536 && !g.Vg(d.mode))
                throw new g.Eg(54);
            if (!e && (c = g.Xl(d, b)))
                throw new g.Eg(c);
            b & 512 && !e && g.truncate(d, 0);
            b &= -131713;
            d = g.gk({
                node: d,
                path: g.Ch(d),
                flags: b,
                seekable: !0,
                position: 0,
                Kg: d.Kg,
                Bm: [],
                error: !1
            });
            d.Kg.open && d.Kg.open(d);
            !l.logReadFiles || b & 1 || (g.Mj || (g.Mj = {}),
            a in g.Mj || (g.Mj[a] = 1));
            return d
        }
        ,
        close: a => {
            if (g.pi(a))
                throw new g.Eg(8);
            a.xj && (a.xj = null);
            try {
                a.Kg.close && a.Kg.close(a)
            } catch (b) {
                throw b;
            } finally {
                g.il(a.ni)
            }
            a.ni = null
        }
        ,
        pi: a => null === a.ni,
        qh: (a, b, c) => {
            if (g.pi(a))
                throw new g.Eg(8);
            if (!a.seekable || !a.Kg.qh)
                throw new g.Eg(70);
            if (0 != c && 1 != c && 2 != c)
                throw new g.Eg(28);
            a.position = a.Kg.qh(a, b, c);
            a.Bm = [];
            return a.position
        }
        ,
        read: (a, b, c, d, e) => {
            if (0 > d || 0 > e)
                throw new g.Eg(28);
            if (g.pi(a))
                throw new g.Eg(8);
            if (1 === (a.flags & 2097155))
                throw new g.Eg(8);
            if (g.Vg(a.node.mode))
                throw new g.Eg(31);
            if (!a.Kg.read)
                throw new g.Eg(28);
            var f = "undefined" != typeof e;
            if (!f)
                e = a.position;
            else if (!a.seekable)
                throw new g.Eg(70);
            b = a.Kg.read(a, b, c, d, e);
            f || (a.position += b);
            return b
        }
        ,
        write: (a, b, c, d, e, f) => {
            if (0 > d || 0 > e)
                throw new g.Eg(28);
            if (g.pi(a))
                throw new g.Eg(8);
            if (0 === (a.flags & 2097155))
                throw new g.Eg(8);
            if (g.Vg(a.node.mode))
                throw new g.Eg(31);
            if (!a.Kg.write)
                throw new g.Eg(28);
            a.seekable && a.flags & 1024 && g.qh(a, 0, 2);
            var h = "undefined" != typeof e;
            if (!h)
                e = a.position;
            else if (!a.seekable)
                throw new g.Eg(70);
            b = a.Kg.write(a, b, c, d, e, f);
            h || (a.position += b);
            return b
        }
        ,
        ji: (a, b, c) => {
            if (g.pi(a))
                throw new g.Eg(8);
            if (0 > b || 0 >= c)
                throw new g.Eg(28);
            if (0 === (a.flags & 2097155))
                throw new g.Eg(8);
            if (!g.isFile(a.node.mode) && !g.Vg(a.node.mode))
                throw new g.Eg(43);
            if (!a.Kg.ji)
                throw new g.Eg(138);
            a.Kg.ji(a, b, c)
        }
        ,
        Xh: (a, b, c, d, e) => {
            if (0 !== (d & 2) && 0 === (e & 2) && 2 !== (a.flags & 2097155))
                throw new g.Eg(2);
            if (1 === (a.flags & 2097155))
                throw new g.Eg(2);
            if (!a.Kg.Xh)
                throw new g.Eg(43);
            return a.Kg.Xh(a, b, c, d, e)
        }
        ,
        $h: (a, b, c, d, e) => a && a.Kg.$h ? a.Kg.$h(a, b, c, d, e) : 0,
        on: () => 0,
        Cj: (a, b, c) => {
            if (!a.Kg.Cj)
                throw new g.Eg(59);
            return a.Kg.Cj(a, b, c)
        }
        ,
        vn: (a, b={}) => {
            b.flags = b.flags || 0;
            b.encoding = b.encoding || "binary";
            if ("utf8" !== b.encoding && "binary" !== b.encoding)
                throw Error('Invalid encoding type "' + b.encoding + '"');
            var c, d = g.open(a, b.flags);
            a = g.stat(a).size;
            var e = new Uint8Array(a);
            g.read(d, e, 0, a, 0);
            "utf8" === b.encoding ? c = ya(e, 0) : "binary" === b.encoding && (c = e);
            g.close(d);
            return c
        }
        ,
        Ln: (a, b, c={}) => {
            c.flags = c.flags || 577;
            a = g.open(a, c.flags, c.mode);
            if ("string" == typeof b) {
                var d = new Uint8Array(Ga(b) + 1);
                b = Fa(b, d, 0, d.length);
                g.write(a, d, 0, b, F, c.fl)
            } else if (ArrayBuffer.isView(b))
                g.write(a, b, 0, b.byteLength, F, c.fl);
            else
                throw Error("Unsupported data type");
            g.close(a)
        }
        ,
        Mi: () => g.jk,
        Jm: a => {
            a = g.Mg(a, {
                oh: !0
            });
            if (null === a.node)
                throw new g.Eg(44);
            if (!g.Vg(a.node.mode))
                throw new g.Eg(54);
            var b = g.Nh(a.node, "x");
            if (b)
                throw new g.Eg(b);
            g.jk = a.path
        }
        ,
        kl: () => {
            g.hh("/tmp");
            g.hh("/home");
            g.hh("/home/web_user")
        }
        ,
        jl: () => {
            g.hh("/dev");
            g.Oj(g.Lh(1, 3), {
                read: () => 0,
                write: (b, c, d, e) => e
            });
            g.Xi("/dev/null", g.Lh(1, 3));
            ra.register(g.Lh(5, 0), ra.vl);
            ra.register(g.Lh(6, 0), ra.ul);
            g.Xi("/dev/tty", g.Lh(5, 0));
            g.Xi("/dev/tty1", g.Lh(6, 0));
            var a = Ac();
            g.Bh("/dev", "random", a);
            g.Bh("/dev", "urandom", a);
            g.hh("/dev/shm");
            g.hh("/dev/shm/tmp")
        }
        ,
        ml: () => {
            g.hh("/proc");
            var a = g.hh("/proc/self");
            g.hh("/proc/self/fd");
            g.Og({
                Og: () => {
                    var b = g.createNode(a, "fd", 16895, 73);
                    b.Hg = {
                        Kh: (c, d) => {
                            var e = g.Vh(+d);
                            if (!e)
                                throw new g.Eg(8);
                            c = {
                                parent: null,
                                Og: {
                                    Gk: "fake"
                                },
                                Hg: {
                                    Oh: () => e.path
                                }
                            };
                            return c.parent = c
                        }
                    };
                    return b
                }
            }, {}, "/proc/self/fd")
        }
        ,
        nl: () => {
            l.stdin ? g.Bh("/dev", "stdin", l.stdin) : g.Fh("/dev/tty", "/dev/stdin");
            l.stdout ? g.Bh("/dev", "stdout", null, l.stdout) : g.Fh("/dev/tty", "/dev/stdout");
            l.stderr ? g.Bh("/dev", "stderr", null, l.stderr) : g.Fh("/dev/tty1", "/dev/stderr");
            g.open("/dev/stdin", 0);
            g.open("/dev/stdout", 1);
            g.open("/dev/stderr", 1)
        }
        ,
        nk: () => {
            g.Eg || (g.Eg = function(a, b) {
                this.node = b;
                this.rm = function(c) {
                    this.nh = c
                }
                ;
                this.rm(a);
                this.message = "FS error"
            }
            ,
            g.Eg.prototype = Error(),
            g.Eg.prototype.constructor = g.Eg,
            [44].forEach(a => {
                g.tj[a] = new g.Eg(a);
                g.tj[a].stack = "<generic error, no stack>"
            }
            ))
        }
        ,
        Tj: () => {
            g.nk();
            g.rh = Array(4096);
            g.Og(H, {}, "/");
            g.kl();
            g.jl();
            g.ml();
            g.Dl = {
                MEMFS: H
            }
        }
        ,
        wh: (a, b, c) => {
            g.wh.Aj = !0;
            g.nk();
            l.stdin = a || l.stdin;
            l.stdout = b || l.stdout;
            l.stderr = c || l.stderr;
            g.nl()
        }
        ,
        un: () => {
            g.wh.Aj = !1;
            for (var a = 0; a < g.streams.length; a++) {
                var b = g.streams[a];
                b && g.close(b)
            }
        }
        ,
        vj: (a, b) => {
            var c = 0;
            a && (c |= 365);
            b && (c |= 146);
            return c
        }
        ,
        Wm: (a, b) => {
            a = g.hj(a, b);
            return a.qj ? a.object : null
        }
        ,
        hj: (a, b) => {
            try {
                var c = g.Mg(a, {
                    oh: !b
                });
                a = c.path
            } catch (e) {}
            var d = {
                Pi: !1,
                qj: !1,
                error: 0,
                name: null,
                path: null,
                object: null,
                dm: !1,
                fm: null,
                em: null
            };
            try {
                c = g.Mg(a, {
                    parent: !0
                }),
                d.dm = !0,
                d.fm = c.path,
                d.em = c.node,
                d.name = M.Ah(a),
                c = g.Mg(a, {
                    oh: !b
                }),
                d.qj = !0,
                d.path = c.path,
                d.object = c.node,
                d.name = c.node.name,
                d.Pi = "/" === c.path
            } catch (e) {
                d.error = e.nh
            }
            return d
        }
        ,
        Nm: (a, b) => {
            a = "string" == typeof a ? a : g.Ch(a);
            for (b = b.split("/").reverse(); b.length; ) {
                var c = b.pop();
                if (c) {
                    var d = M.Jh(a, c);
                    try {
                        g.hh(d)
                    } catch (e) {}
                    a = d
                }
            }
            return d
        }
        ,
        ll: (a, b, c, d, e) => {
            a = M.Jh("string" == typeof a ? a : g.Ch(a), b);
            return g.create(a, g.vj(d, e))
        }
        ,
        fk: (a, b, c, d, e, f) => {
            var h = b;
            a && (a = "string" == typeof a ? a : g.Ch(a),
            h = b ? M.Jh(a, b) : a);
            a = g.vj(d, e);
            h = g.create(h, a);
            if (c) {
                if ("string" == typeof c) {
                    b = Array(c.length);
                    d = 0;
                    for (e = c.length; d < e; ++d)
                        b[d] = c.charCodeAt(d);
                    c = b
                }
                g.Ji(h, a | 146);
                b = g.open(h, 577);
                g.write(b, c, 0, c.length, 0, f);
                g.close(b);
                g.Ji(h, a)
            }
            return h
        }
        ,
        Bh: (a, b, c, d) => {
            a = M.Jh("string" == typeof a ? a : g.Ch(a), b);
            b = g.vj(!!c, !!d);
            g.Bh.Fj || (g.Bh.Fj = 64);
            var e = g.Lh(g.Bh.Fj++, 0);
            g.Oj(e, {
                open: f => {
                    f.seekable = !1
                }
                ,
                close: () => {
                    d && d.buffer && d.buffer.length && d(10)
                }
                ,
                read: (f, h, n, q) => {
                    for (var u = 0, v = 0; v < q; v++) {
                        try {
                            var A = c()
                        } catch (D) {
                            throw new g.Eg(29);
                        }
                        if (A === F && 0 === u)
                            throw new g.Eg(6);
                        if (null === A || A === F)
                            break;
                        u++;
                        h[n + v] = A
                    }
                    u && (f.node.timestamp = Date.now());
                    return u
                }
                ,
                write: (f, h, n, q) => {
                    for (var u = 0; u < q; u++)
                        try {
                            d(h[n + u])
                        } catch (v) {
                            throw new g.Eg(29);
                        }
                    q && (f.node.timestamp = Date.now());
                    return u
                }
            });
            return g.Xi(a, b, e)
        }
        ,
        sj: a => {
            if (a.Ck || a.Vl || a.link || a.Jg)
                return !0;
            if ("undefined" != typeof XMLHttpRequest)
                throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
            if (md)
                try {
                    a.Jg = Ab(md(a.url), !0),
                    a.Ng = a.Jg.length
                } catch (b) {
                    throw new g.Eg(29);
                }
            else
                throw Error("Cannot load without read() or XMLHttpRequest.");
        }
        ,
        Mm: (a, b, c, d, e) => {
            if ("undefined" != typeof XMLHttpRequest)
                throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            c = {
                Ck: !1,
                url: c
            };
            var f = g.ll(a, b, c, d, e);
            c.Jg ? f.Jg = c.Jg : c.url && (f.Jg = null,
            f.url = c.url);
            Object.defineProperties(f, {
                Ng: {
                    get: function() {
                        return this.Jg.length
                    }
                }
            });
            var h = {};
            Object.keys(f.Kg).forEach(n => {
                var q = f.Kg[n];
                h[n] = function() {
                    g.sj(f);
                    return q.apply(null, arguments)
                }
            }
            );
            h.read = (n, q, u, v, A) => {
                g.sj(f);
                n = n.node.Jg;
                if (A >= n.length)
                    q = 0;
                else {
                    v = Math.min(n.length - A, v);
                    if (n.slice)
                        for (var D = 0; D < v; D++)
                            q[u + D] = n[A + D];
                    else
                        for (D = 0; D < v; D++)
                            q[u + D] = n.get(A + D);
                    q = v
                }
                return q
            }
            ;
            h.Xh = () => {
                g.sj(f);
                fa();
                throw new g.Eg(48);
            }
            ;
            f.Kg = h;
            return f
        }
        ,
        Om: (a, b, c, d, e, f, h, n, q, u) => {
            function v(t) {
                function E(L) {
                    u && u();
                    n || g.fk(a, b, L, d, e, q);
                    f && f();
                    za(D)
                }
                r.Nl(t, A, E, () => {
                    h && h();
                    za(D)
                }
                ) || E(t)
            }
            var A = b ? pa.resolve(M.Jh(a, b)) : a
              , D = "cp " + A;
            Wa(D);
            "string" == typeof c ? Gh(c, t => v(t), h) : v(c)
        }
        ,
        indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
        Zj: () => "EM_FS_" + window.location.pathname,
        $j: 20,
        hi: "FILE_DATA",
        zn: (a, b, c) => {
            b = b || ( () => {}
            );
            c = c || ( () => {}
            );
            var d = g.indexedDB();
            try {
                var e = d.open(g.Zj(), g.$j)
            } catch (f) {
                return c(f)
            }
            e.onupgradeneeded = () => {
                Ka("creating db");
                e.result.createObjectStore(g.hi)
            }
            ;
            e.onsuccess = () => {
                var f = e.result.transaction([g.hi], "readwrite")
                  , h = f.objectStore(g.hi)
                  , n = 0
                  , q = 0
                  , u = a.length;
                a.forEach(v => {
                    v = h.put(g.hj(v).object.Jg, v);
                    v.onsuccess = () => {
                        n++;
                        n + q == u && (0 == q ? b() : c())
                    }
                    ;
                    v.onerror = () => {
                        q++;
                        n + q == u && (0 == q ? b() : c())
                    }
                }
                );
                f.onerror = c
            }
            ;
            e.onerror = c
        }
        ,
        dn: (a, b, c) => {
            b = b || ( () => {}
            );
            c = c || ( () => {}
            );
            var d = g.indexedDB();
            try {
                var e = d.open(g.Zj(), g.$j)
            } catch (f) {
                return c(f)
            }
            e.onupgradeneeded = c;
            e.onsuccess = () => {
                var f = e.result;
                try {
                    var h = f.transaction([g.hi], "readonly")
                } catch (A) {
                    c(A);
                    return
                }
                var n = h.objectStore(g.hi)
                  , q = 0
                  , u = 0
                  , v = a.length;
                a.forEach(A => {
                    var D = n.get(A);
                    D.onsuccess = () => {
                        g.hj(A).qj && g.fi(A);
                        g.fk(M.dirname(A), M.Ah(A), D.result, !0, !0, !0);
                        q++;
                        q + u == v && (0 == u ? b() : c())
                    }
                    ;
                    D.onerror = () => {
                        u++;
                        q + u == v && (0 == u ? b() : c())
                    }
                }
                );
                h.onerror = c
            }
            ;
            e.onerror = c
        }
    }, Y = {
        Gm: 5,
        el: function(a, b, c) {
            if (M.Dj(b))
                return b;
            if (-100 === a)
                a = g.Mi();
            else {
                a = g.Vh(a);
                if (!a)
                    throw new g.Eg(8);
                a = a.path
            }
            if (0 == b.length) {
                if (!c)
                    throw new g.Eg(44);
                return a
            }
            return M.Jh(a, b)
        },
        Sm: function(a, b, c) {
            try {
                var d = a(b)
            } catch (e) {
                if (e && e.node && M.normalize(b) !== M.normalize(g.Ch(e.node)))
                    return -54;
                throw e;
            }
            m[c >> 2] = d.yl;
            m[c + 4 >> 2] = 0;
            m[c + 8 >> 2] = d.Bj;
            m[c + 12 >> 2] = d.mode;
            m[c + 16 >> 2] = d.cm;
            m[c + 20 >> 2] = d.uid;
            m[c + 24 >> 2] = d.Ll;
            m[c + 28 >> 2] = d.yi;
            m[c + 32 >> 2] = 0;
            W = [d.size >>> 0, (G = d.size,
            1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
            m[c + 40 >> 2] = W[0];
            m[c + 44 >> 2] = W[1];
            m[c + 48 >> 2] = 4096;
            m[c + 52 >> 2] = d.dl;
            W = [Math.floor(d.bk.getTime() / 1E3) >>> 0, (G = Math.floor(d.bk.getTime() / 1E3),
            1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
            m[c + 56 >> 2] = W[0];
            m[c + 60 >> 2] = W[1];
            m[c + 64 >> 2] = 0;
            W = [Math.floor(d.Hk.getTime() / 1E3) >>> 0, (G = Math.floor(d.Hk.getTime() / 1E3),
            1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
            m[c + 72 >> 2] = W[0];
            m[c + 76 >> 2] = W[1];
            m[c + 80 >> 2] = 0;
            W = [Math.floor(d.hk.getTime() / 1E3) >>> 0, (G = Math.floor(d.hk.getTime() / 1E3),
            1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
            m[c + 88 >> 2] = W[0];
            m[c + 92 >> 2] = W[1];
            m[c + 96 >> 2] = 0;
            W = [d.Bj >>> 0, (G = d.Bj,
            1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
            m[c + 104 >> 2] = W[0];
            m[c + 108 >> 2] = W[1];
            return 0
        },
        Rm: function(a, b, c, d, e) {
            g.$h(b, O.slice(a, a + c), e, c, d)
        },
        gi: F,
        get: function() {
            Y.gi += 4;
            return m[Y.gi - 4 >> 2]
        },
        Kl: function(a) {
            return z(a)
        },
        Wh: function(a) {
            a = g.Vh(a);
            if (!a)
                throw new g.Eg(8);
            return a
        }
    };
    var Bb = () => performance.now();
    var r = {
        Gg: {
            Qj: !1,
            Eh: null,
            method: "",
            Sh: 0,
            Th: null,
            ij: 0,
            cj: 0,
            dj: 0,
            mj: 0,
            Mk: [],
            pause: function() {
                r.Gg.Eh = null;
                r.Gg.Sh++
            },
            resume: function() {
                r.Gg.Sh++;
                var a = r.Gg.cj
                  , b = r.Gg.dj
                  , c = r.Gg.Th;
                r.Gg.Th = null;
                Cc(c, 0, !1, r.Gg.ij, !0);
                Ja(a, b);
                r.Gg.Eh()
            },
            Dm: function() {
                if (l.setStatus) {
                    var a = l.statusMessage || "Please wait..."
                      , b = r.Gg.Pj
                      , c = r.Gg.Tm;
                    b ? b < c ? l.setStatus(a + " (" + (c - b) + "/" + c + ")") : l.setStatus(a) : l.setStatus("")
                }
            },
            pm: function(a) {
                Aa || l.preMainLoop && !1 === l.preMainLoop() || ($a(a),
                l.postMainLoop && l.postMainLoop())
            }
        },
        ri: !1,
        Kj: !1,
        Fk: [],
        Kn: [],
        wh: function() {
            function a() {
                r.Kj = document.pointerLockElement === l.canvas || document.mozPointerLockElement === l.canvas || document.webkitPointerLockElement === l.canvas || document.msPointerLockElement === l.canvas
            }
            l.preloadPlugins || (l.preloadPlugins = []);
            if (!r.Sl) {
                r.Sl = !0;
                try {
                    r.Ni = !0
                } catch (c) {
                    r.Ni = !1,
                    ea("warning: no blob constructor, cannot create blobs with mimetypes")
                }
                r.BlobBuilder = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : r.Ni ? null : ea("warning: no BlobBuilder");
                r.Hi = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : F;
                l.Ik || "undefined" != typeof r.Hi || (ea("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),
                l.Ik = !0);
                l.preloadPlugins.push({
                    canHandle: function(c) {
                        return !l.Ik && /\.(jpg|jpeg|png|bmp)$/i.test(c)
                    },
                    handle: function(c, d, e, f) {
                        var h = null;
                        if (r.Ni)
                            try {
                                h = new Blob([c],{
                                    type: r.uj(d)
                                }),
                                h.size !== c.length && (h = new Blob([(new Uint8Array(c)).buffer],{
                                    type: r.uj(d)
                                }))
                            } catch (u) {
                                La("Blob constructor present but fails: " + u + "; falling back to blob builder")
                            }
                        h || (h = new r.BlobBuilder,
                        h.append((new Uint8Array(c)).buffer),
                        h = h.getBlob());
                        var n = r.Hi.createObjectURL(h)
                          , q = new Image;
                        q.onload = () => {
                            q.complete || fa("Image " + d + " could not be decoded");
                            var u = document.createElement("canvas");
                            u.width = q.width;
                            u.height = q.height;
                            u.getContext("2d").drawImage(q, 0, 0);
                            r.Hi.revokeObjectURL(n);
                            e && e(c)
                        }
                        ;
                        q.onerror = () => {
                            Ka("Image " + n + " could not be decoded");
                            f && f()
                        }
                        ;
                        q.src = n
                    }
                });
                l.preloadPlugins.push({
                    canHandle: function(c) {
                        return !l.pn && c.substr(-4)in {
                            ".ogg": 1,
                            ".wav": 1,
                            ".mp3": 1
                        }
                    },
                    handle: function(c, d, e, f) {
                        function h() {
                            q || (q = !0,
                            e && e(c))
                        }
                        function n() {
                            q || (q = !0,
                            new Audio,
                            f && f())
                        }
                        var q = !1;
                        if (r.Ni) {
                            try {
                                var u = new Blob([c],{
                                    type: r.uj(d)
                                })
                            } catch (A) {
                                return n()
                            }
                            u = r.Hi.createObjectURL(u);
                            var v = new Audio;
                            v.addEventListener("canplaythrough", () => h(v), !1);
                            v.onerror = function() {
                                if (!q) {
                                    ea("warning: browser could not fully decode audio " + d + ", trying slower base64 approach");
                                    for (var A = "", D = 0, t = 0, E = 0; E < c.length; E++)
                                        for (D = D << 8 | c[E],
                                        t += 8; 6 <= t; ) {
                                            var L = D >> t - 6 & 63;
                                            t -= 6;
                                            A += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[L]
                                        }
                                    2 == t ? (A += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(D & 3) << 4],
                                    A += "==") : 4 == t && (A += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(D & 15) << 2],
                                    A += "=");
                                    v.src = "data:audio/x-" + d.substr(-3) + ";base64," + A;
                                    h(v)
                                }
                            }
                            ;
                            v.src = u;
                            Dc(function() {
                                h(v)
                            }, 1E4)
                        } else
                            return n()
                    }
                });
                var b = l.canvas;
                b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || ( () => {}
                ),
                b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || ( () => {}
                ),
                b.exitPointerLock = b.exitPointerLock.bind(document),
                document.addEventListener("pointerlockchange", a, !1),
                document.addEventListener("mozpointerlockchange", a, !1),
                document.addEventListener("webkitpointerlockchange", a, !1),
                document.addEventListener("mspointerlockchange", a, !1),
                l.elementPointerLock && b.addEventListener("click", c => {
                    !r.Kj && l.canvas.requestPointerLock && (l.canvas.requestPointerLock(),
                    c.preventDefault())
                }
                , !1))
            }
        },
        Nl: function(a, b, c, d) {
            r.wh();
            var e = !1;
            l.preloadPlugins.forEach(function(f) {
                !e && f.canHandle(b) && (f.handle(a, b, c, d),
                e = !0)
            });
            return e
        },
        li: function(a, b, c, d) {
            if (b && l.lh && a == l.canvas)
                return l.lh;
            var e;
            if (b) {
                var f = {
                    antialias: !1,
                    alpha: !1,
                    Gj: 2
                };
                if (d)
                    for (var h in d)
                        f[h] = d[h];
                if ("undefined" != typeof p && (e = p.li(a, f)))
                    var n = p.getContext(e).zh
            } else
                n = a.getContext("2d");
            if (!n)
                return null;
            c && (b || "undefined" == typeof k || fa("cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),
            l.lh = n,
            b && p.ti(e),
            l.Em = b,
            r.Fk.forEach(function(q) {
                q()
            }),
            r.wh());
            return n
        },
        Pm: function() {},
        tk: !1,
        Ri: F,
        di: F,
        requestFullscreen: function(a, b) {
            function c() {
                r.ri = !1;
                var f = d.parentNode;
                (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === f ? (d.exitFullscreen = r.exitFullscreen,
                r.Ri && d.requestPointerLock(),
                r.ri = !0,
                r.di ? r.sm() : r.Fi(d)) : (f.parentNode.insertBefore(d, f),
                f.parentNode.removeChild(f),
                r.di ? r.tm() : r.Fi(d));
                if (l.onFullScreen)
                    l.onFullScreen(r.ri);
                if (l.onFullscreen)
                    l.onFullscreen(r.ri)
            }
            r.Ri = a;
            r.di = b;
            "undefined" == typeof r.Ri && (r.Ri = !0);
            "undefined" == typeof r.di && (r.di = !1);
            var d = l.canvas;
            r.tk || (r.tk = !0,
            document.addEventListener("fullscreenchange", c, !1),
            document.addEventListener("mozfullscreenchange", c, !1),
            document.addEventListener("webkitfullscreenchange", c, !1),
            document.addEventListener("MSFullscreenChange", c, !1));
            var e = document.createElement("div");
            d.parentNode.insertBefore(e, d);
            e.appendChild(d);
            e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || (e.webkitRequestFullscreen ? () => e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (e.webkitRequestFullScreen ? () => e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null);
            e.requestFullscreen()
        },
        exitFullscreen: function() {
            if (!r.ri)
                return !1;
            (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}
            ).apply(document, []);
            return !0
        },
        ai: 0,
        Cl: function(a) {
            var b = Date.now();
            if (0 === r.ai)
                r.ai = b + 1E3 / 60;
            else
                for (; b + 2 >= r.ai; )
                    r.ai += 1E3 / 60;
            setTimeout(a, Math.max(r.ai - b, 0))
        },
        requestAnimationFrame: function(a) {
            if ("function" == typeof requestAnimationFrame)
                requestAnimationFrame(a);
            else {
                var b = r.Cl;
                b(a)
            }
        },
        yn: function(a) {
            return Dc(a)
        },
        xn: function(a) {
            return r.requestAnimationFrame(function() {
                $a(a)
            })
        },
        uj: function(a) {
            return {
                jpg: "image/jpeg",
                jpeg: "image/jpeg",
                png: "image/png",
                bmp: "image/bmp",
                ogg: "audio/ogg",
                wav: "audio/wav",
                mp3: "audio/mpeg"
            }[a.substr(a.lastIndexOf(".") + 1)]
        },
        getUserMedia: function(a) {
            window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
            window.getUserMedia(a)
        },
        Hl: function(a) {
            return a.movementX || a.mozMovementX || a.webkitMovementX || 0
        },
        Il: function(a) {
            return a.movementY || a.mozMovementY || a.webkitMovementY || 0
        },
        Zm: function(a) {
            switch (a.type) {
            case "DOMMouseScroll":
                var b = a.detail / 3;
                break;
            case "mousewheel":
                b = a.wheelDelta / 120;
                break;
            case "wheel":
                b = a.deltaY;
                switch (a.deltaMode) {
                case 0:
                    b /= 100;
                    break;
                case 1:
                    b /= 3;
                    break;
                case 2:
                    b *= 80;
                    break;
                default:
                    throw "unrecognized mouse wheel delta mode: " + a.deltaMode;
                }
                break;
            default:
                throw "unrecognized mouse wheel event: " + a.type;
            }
            return b
        },
        Yh: 0,
        Zh: 0,
        wi: 0,
        xi: 0,
        touches: {},
        Ek: {},
        Im: function(a) {
            if (r.Kj)
                "mousemove" != a.type && "mozMovementX"in a ? r.wi = r.xi = 0 : (r.wi = r.Hl(a),
                r.xi = r.Il(a)),
                "undefined" != typeof SDL ? (r.Yh = SDL.Yh + r.wi,
                r.Zh = SDL.Zh + r.xi) : (r.Yh += r.wi,
                r.Zh += r.xi);
            else {
                var b = l.canvas.getBoundingClientRect()
                  , c = l.canvas.width
                  , d = l.canvas.height
                  , e = "undefined" != typeof window.scrollX ? window.scrollX : window.pageXOffset
                  , f = "undefined" != typeof window.scrollY ? window.scrollY : window.pageYOffset;
                if ("touchstart" === a.type || "touchend" === a.type || "touchmove" === a.type) {
                    var h = a.Cn;
                    if (h !== F)
                        if (e = h.pageX - (e + b.left),
                        f = h.pageY - (f + b.top),
                        e *= c / b.width,
                        f *= d / b.height,
                        b = {
                            x: e,
                            y: f
                        },
                        "touchstart" === a.type)
                            r.Ek[h.identifier] = b,
                            r.touches[h.identifier] = b;
                        else if ("touchend" === a.type || "touchmove" === a.type)
                            (a = r.touches[h.identifier]) || (a = b),
                            r.Ek[h.identifier] = a,
                            r.touches[h.identifier] = b
                } else
                    h = a.pageX - (e + b.left),
                    a = a.pageY - (f + b.top),
                    h *= c / b.width,
                    a *= d / b.height,
                    r.wi = h - r.Yh,
                    r.xi = a - r.Zh,
                    r.Yh = h,
                    r.Zh = a
            }
        },
        om: [],
        Xj: function() {
            var a = l.canvas;
            r.om.forEach(function(b) {
                b(a.width, a.height)
            })
        },
        qm: function(a, b, c) {
            r.Fi(l.canvas, a, b);
            c || r.Xj()
        },
        Jn: 0,
        In: 0,
        sm: function() {
            "undefined" != typeof SDL && (m[SDL.screen >> 2] = B[SDL.screen >> 2] | 8388608);
            r.Fi(l.canvas);
            r.Xj()
        },
        tm: function() {
            "undefined" != typeof SDL && (m[SDL.screen >> 2] = B[SDL.screen >> 2] & -8388609);
            r.Fi(l.canvas);
            r.Xj()
        },
        Fi: function(a, b, c) {
            b && c ? (a.Fm = b,
            a.Ol = c) : (b = a.Fm,
            c = a.Ol);
            var d = b
              , e = c;
            l.forcedAspectRatio && 0 < l.forcedAspectRatio && (d / e < l.forcedAspectRatio ? d = Math.round(e * l.forcedAspectRatio) : e = Math.round(d / l.forcedAspectRatio));
            if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
                var f = Math.min(screen.width / d, screen.height / e);
                d = Math.round(d * f);
                e = Math.round(e * f)
            }
            r.di ? (a.width != d && (a.width = d),
            a.height != e && (a.height = e),
            "undefined" != typeof a.style && (a.style.removeProperty("width"),
            a.style.removeProperty("height"))) : (a.width != b && (a.width = b),
            a.height != c && (a.height = c),
            "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"),
            a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"),
            a.style.removeProperty("height"))))
        }
    }
      , y = {
        errorCode: 12288,
        oj: !1,
        Tg: 0,
        Li: 0,
        Ki: 0,
        Sg: {
            alpha: !1,
            depth: !1,
            stencil: !1,
            antialias: !1
        },
        ei: {},
        Ig: function(a) {
            y.errorCode = a
        },
        gl: function(a, b, c, d, e) {
            if (62E3 != a)
                return y.Ig(12296),
                0;
            if (b)
                for (; ; ) {
                    a = m[b >> 2];
                    if (12321 == a)
                        y.Sg.alpha = 0 < m[b + 4 >> 2];
                    else if (12325 == a)
                        y.Sg.depth = 0 < m[b + 4 >> 2];
                    else if (12326 == a)
                        y.Sg.stencil = 0 < m[b + 4 >> 2];
                    else if (12337 == a)
                        a = m[b + 4 >> 2],
                        y.Sg.antialias = 0 < a;
                    else if (12338 == a)
                        a = m[b + 4 >> 2],
                        y.Sg.antialias = 1 == a;
                    else if (12544 == a)
                        y.Sg.en = 12547 != m[b + 4 >> 2];
                    else if (12344 == a)
                        break;
                    b += 8
                }
            if (!(c && d || e))
                return y.Ig(12300),
                0;
            e && (m[e >> 2] = 1);
            c && 0 < d && (m[c >> 2] = 62002);
            y.Ig(12288);
            return 1
        }
    }
      , p = {
        counter: 1,
        Hh: [],
        Lg: [],
        oi: [],
        ci: [],
        Ph: [],
        Xg: [],
        uh: [],
        kh: [],
        qn: {},
        Rg: [],
        jh: [],
        Di: [],
        Gh: [],
        ei: {},
        Rk: {},
        Cm: 4,
        Fg: function(a) {
            p.Ej || (p.Ej = a)
        },
        Uh: function(a) {
            for (var b = p.counter++, c = a.length; c < b; c++)
                a[c] = null;
            return b
        },
        Jl: function(a, b, c, d) {
            a = "";
            for (var e = 0; e < b; ++e) {
                var f = d ? m[d + 4 * e >> 2] : -1;
                a += z(m[c + 4 * e >> 2], 0 > f ? F : f)
            }
            return a
        },
        li: function(a, b) {
            a.vk || (a.vk = a.getContext,
            a.getContext = function(d, e) {
                e = a.vk(d, e);
                return "webgl" == d == e instanceof WebGLRenderingContext ? e : null
            }
            );
            var c = a.getContext("webgl2", b);
            return c ? p.im(c, b) : 0
        },
        im: function(a, b) {
            var c = p.Uh(p.kh)
              , d = {
                $m: c,
                attributes: b,
                version: b.Gj,
                zh: a
            };
            a.canvas && (a.canvas.ii = d);
            p.kh[c] = d;
            ("undefined" == typeof b.mk || b.mk) && p.Ql(d);
            return c
        },
        ti: function(a) {
            p.Tg = p.kh[a];
            l.lh = k = p.Tg && p.Tg.zh;
            return !(a && !k)
        },
        getContext: function(a) {
            return p.kh[a]
        },
        xl: function(a) {
            p.Tg === p.kh[a] && (p.Tg = null);
            "object" == typeof w && w.lm(p.kh[a].zh.canvas);
            p.kh[a] && p.kh[a].zh.canvas && (p.kh[a].zh.canvas.ii = F);
            p.kh[a] = null
        },
        Ql: function(a) {
            a || (a = p.Tg);
            if (!a.Rl) {
                a.Rl = !0;
                var b = a.zh;
                b.Qm = b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
                b.gn = b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
                2 <= a.version && (b.$g = b.getExtension("EXT_disjoint_timer_query_webgl2"));
                if (2 > a.version || !b.$g)
                    b.$g = b.getExtension("EXT_disjoint_timer_query");
                b.nn = b.getExtension("WEBGL_multi_draw");
                (b.getSupportedExtensions() || []).forEach(function(c) {
                    c.includes("lose_context") || c.includes("debug") || b.getExtension(c)
                })
            }
        }
    }
      , Cb = []
      , w = {
        zj: 0,
        km: function() {
            for (var a = w.fh.length - 1; 0 <= a; --a)
                w.gj(a);
            w.fh = [];
            w.eh = []
        },
        jm: function() {
            w.mm || (Xh.push(w.km),
            w.mm = !0)
        },
        eh: [],
        kk: function(a, b, c) {
            function d(h, n) {
                if (h.length != n.length)
                    return !1;
                for (var q in h)
                    if (h[q] != n[q])
                        return !1;
                return !0
            }
            for (var e in w.eh) {
                var f = w.eh[e];
                if (f.Uj == a && d(f.ak, c))
                    return
            }
            w.eh.push({
                Uj: a,
                Lk: b,
                ak: c
            });
            w.eh.sort(function(h, n) {
                return h.Lk < n.Lk
            })
        },
        Pk: function(a) {
            for (var b = 0; b < w.eh.length; ++b)
                w.eh[b].Uj == a && (w.eh.splice(b, 1),
                --b)
        },
        jj: function() {
            return w.zj && w.pl.ki
        },
        Qk: function() {
            if (w.jj())
                for (var a = 0; a < w.eh.length; ++a) {
                    var b = w.eh[a];
                    w.eh.splice(a, 1);
                    --a;
                    b.Uj.apply(null, b.ak)
                }
        },
        fh: [],
        lm: function(a, b) {
            for (var c = 0; c < w.fh.length; ++c)
                w.fh[c].target != a || b && b != w.fh[c].Ug || w.gj(c--)
        },
        gj: function(a) {
            var b = w.fh[a];
            b.target.removeEventListener(b.Ug, b.Al, b.bh);
            w.fh.splice(a, 1)
        },
        ih: function(a) {
            function b(d) {
                ++w.zj;
                w.pl = a;
                w.Qk();
                a.gh(d);
                w.Qk();
                --w.zj
            }
            if (a.dh)
                a.Al = b,
                a.target.addEventListener(a.Ug, b, a.bh),
                w.fh.push(a),
                w.jm();
            else
                for (var c = 0; c < w.fh.length; ++c)
                    w.fh[c].target == a.target && w.fh[c].Ug == a.Ug && w.gj(c--)
        },
        wj: function(a) {
            return a ? a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "" : ""
        },
        fullscreenEnabled: function() {
            return document.fullscreenEnabled || document.webkitFullscreenEnabled
        }
    }
      , bb = {}
      , ab = [0, document, window]
      , Da = []
      , S = {
        Yj: [],
        Zg: function(a, b) {
            B[a >> 2] = b;
            B[a + 4 >> 2] = b / 4294967296 | 0
        },
        openDatabase: function(a, b, c, d) {
            try {
                var e = indexedDB.open(a, b)
            } catch (f) {
                return d(f)
            }
            e.onupgradeneeded = f => {
                f = f.target.result;
                f.objectStoreNames.contains("FILES") && f.deleteObjectStore("FILES");
                f.createObjectStore("FILES")
            }
            ;
            e.onsuccess = f => c(f.target.result);
            e.onerror = f => d(f)
        },
        Tj: function() {
            S.openDatabase("emscripten_filesystem", 1, a => {
                S.mi = a;
                za("library_fetch_init")
            }
            , () => {
                S.mi = !1;
                za("library_fetch_init")
            }
            );
            "undefined" != typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER || Wa("library_fetch_init")
        }
    }
      , Yh = ["default", "low-power", "high-performance"]
      , Kb = {}
      , Uc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      , Vc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    Object.defineProperties(Rb.prototype, {
        read: {
            get: function() {
                return 365 === (this.mode & 365)
            },
            set: function(a) {
                a ? this.mode |= 365 : this.mode &= -366
            }
        },
        write: {
            get: function() {
                return 146 === (this.mode & 146)
            },
            set: function(a) {
                a ? this.mode |= 146 : this.mode &= -147
            }
        },
        Vl: {
            get: function() {
                return g.Vg(this.mode)
            }
        },
        Ck: {
            get: function() {
                return g.Oi(this.mode)
            }
        }
    });
    g.al = Rb;
    g.Tj();
    l.requestFullscreen = function(a, b) {
        r.requestFullscreen(a, b)
    }
    ;
    l.requestAnimationFrame = function(a) {
        r.requestAnimationFrame(a)
    }
    ;
    l.setCanvasSize = function(a, b, c) {
        r.qm(a, b, c)
    }
    ;
    l.pauseMainLoop = function() {
        r.Gg.pause()
    }
    ;
    l.resumeMainLoop = function() {
        r.Gg.resume()
    }
    ;
    l.getUserMedia = function() {
        r.getUserMedia()
    }
    ;
    l.createContext = function(a, b, c, d) {
        return r.li(a, b, c, d)
    }
    ;
    for (var k, Qb = 0; 32 > Qb; ++Qb)
        Da.push(Array(Qb));
    S.Tj();
    var Zh = {
        L: function(a, b, c) {
            Y.gi = c;
            try {
                var d = Y.Wh(a);
                switch (b) {
                case 0:
                    var e = Y.get();
                    return 0 > e ? -28 : g.gk(d, e).ni;
                case 1:
                case 2:
                    return 0;
                case 3:
                    return d.flags;
                case 4:
                    return e = Y.get(),
                    d.flags |= e,
                    0;
                case 5:
                    return e = Y.get(),
                    Ba[e + 0 >> 1] = 2,
                    0;
                case 6:
                case 7:
                    return 0;
                case 16:
                case 8:
                    return -28;
                case 9:
                    return -1;
                default:
                    return -28
                }
            } catch (f) {
                if ("undefined" == typeof g || !(f instanceof g.Eg))
                    throw f;
                return -f.nh
            }
        },
        Ma: function(a, b, c) {
            Y.gi = c;
            try {
                var d = Y.Wh(a);
                switch (b) {
                case 21509:
                case 21505:
                    return d.Pg ? 0 : -59;
                case 21510:
                case 21511:
                case 21512:
                case 21506:
                case 21507:
                case 21508:
                    return d.Pg ? 0 : -59;
                case 21519:
                    if (!d.Pg)
                        return -59;
                    var e = Y.get();
                    return m[e >> 2] = 0;
                case 21520:
                    return d.Pg ? -28 : -59;
                case 21531:
                    return e = Y.get(),
                    g.Cj(d, b, e);
                case 21523:
                    return d.Pg ? 0 : -59;
                case 21524:
                    return d.Pg ? 0 : -59;
                default:
                    fa("bad ioctl syscall " + b)
                }
            } catch (f) {
                if ("undefined" == typeof g || !(f instanceof g.Eg))
                    throw f;
                return -f.nh
            }
        },
        Oa: function(a, b, c, d) {
            Y.gi = d;
            try {
                b = Y.Kl(b);
                b = Y.el(a, b);
                var e = d ? Y.get() : 0;
                return g.open(b, c, e).ni
            } catch (f) {
                if ("undefined" == typeof g || !(f instanceof g.Eg))
                    throw f;
                return -f.nh
            }
        },
        Qa: function() {
            return Date.now()
        },
        e: function(a) {
            delete S.Yj[a - 1]
        },
        Pa: function() {
            return !0
        },
        b: function() {
            fa("")
        },
        Fa: function(a) {
            if (12448 == a)
                return y.Ig(12288),
                1;
            y.Ig(12300);
            return 0
        },
        Oc: function(a, b, c, d, e) {
            return y.gl(a, b, c, d, e)
        },
        sc: function(a, b, c, d) {
            if (62E3 != a)
                return y.Ig(12296),
                0;
            for (a = 1; ; ) {
                b = m[d >> 2];
                if (12440 == b)
                    a = m[d + 4 >> 2];
                else if (12344 == b)
                    break;
                else
                    return y.Ig(12292),
                    0;
                d += 8
            }
            if (2 > a || 3 < a)
                return y.Ig(12293),
                0;
            y.Sg.Gj = a - 1;
            y.Sg.Yl = 0;
            y.context = p.li(l.canvas, y.Sg);
            if (0 != y.context)
                return y.Ig(12288),
                p.ti(y.context),
                l.Em = !0,
                r.Fk.forEach(function(e) {
                    e()
                }),
                p.ti(null),
                62004;
            y.Ig(12297);
            return 0
        },
        Yb: function(a, b) {
            if (62E3 != a)
                return y.Ig(12296),
                0;
            if (62002 != b)
                return y.Ig(12293),
                0;
            y.Ig(12288);
            return 62006
        },
        hc: function(a, b) {
            if (62E3 != a)
                return y.Ig(12296),
                0;
            if (62004 != b)
                return y.Ig(12294),
                0;
            p.xl(y.context);
            y.Ig(12288);
            y.Tg == b && (y.Tg = 0);
            return 1
        },
        Mb: function(a, b) {
            if (62E3 != a)
                return y.Ig(12296),
                0;
            if (62006 != b)
                return y.Ig(12301),
                1;
            y.Li == b && (y.Li = 0);
            y.Ki == b && (y.Ki = 0);
            y.Ig(12288);
            return 1
        },
        Dc: function(a, b, c, d) {
            if (62E3 != a)
                return y.Ig(12296),
                0;
            if (62002 != b)
                return y.Ig(12293),
                0;
            if (!d)
                return y.Ig(12300),
                0;
            y.Ig(12288);
            switch (c) {
            case 12320:
                return m[d >> 2] = y.Sg.alpha ? 32 : 24,
                1;
            case 12321:
                return m[d >> 2] = y.Sg.alpha ? 8 : 0,
                1;
            case 12322:
                return m[d >> 2] = 8,
                1;
            case 12323:
                return m[d >> 2] = 8,
                1;
            case 12324:
                return m[d >> 2] = 8,
                1;
            case 12325:
                return m[d >> 2] = y.Sg.depth ? 24 : 0,
                1;
            case 12326:
                return m[d >> 2] = y.Sg.stencil ? 8 : 0,
                1;
            case 12327:
                return m[d >> 2] = 12344,
                1;
            case 12328:
                return m[d >> 2] = 62002,
                1;
            case 12329:
                return m[d >> 2] = 0,
                1;
            case 12330:
                return m[d >> 2] = 4096,
                1;
            case 12331:
                return m[d >> 2] = 16777216,
                1;
            case 12332:
                return m[d >> 2] = 4096,
                1;
            case 12333:
                return m[d >> 2] = 0,
                1;
            case 12334:
                return m[d >> 2] = 0,
                1;
            case 12335:
                return m[d >> 2] = 12344,
                1;
            case 12337:
                return m[d >> 2] = y.Sg.antialias ? 4 : 0,
                1;
            case 12338:
                return m[d >> 2] = y.Sg.antialias ? 1 : 0,
                1;
            case 12339:
                return m[d >> 2] = 4,
                1;
            case 12340:
                return m[d >> 2] = 12344,
                1;
            case 12341:
            case 12342:
            case 12343:
                return m[d >> 2] = -1,
                1;
            case 12345:
            case 12346:
                return m[d >> 2] = 0,
                1;
            case 12347:
                return m[d >> 2] = 0,
                1;
            case 12348:
                return m[d >> 2] = 1;
            case 12349:
            case 12350:
                return m[d >> 2] = 0,
                1;
            case 12351:
                return m[d >> 2] = 12430,
                1;
            case 12352:
                return m[d >> 2] = 4,
                1;
            case 12354:
                return m[d >> 2] = 0,
                1;
            default:
                return y.Ig(12292),
                0
            }
        },
        M: function() {
            y.Ig(12288);
            return 62E3
        },
        Ca: function() {
            return y.errorCode
        },
        id: function(a, b, c) {
            if (62E3 != a)
                return y.Ig(12296),
                0;
            b && (m[b >> 2] = 1);
            c && (m[c >> 2] = 4);
            y.oj = !0;
            y.Ig(12288);
            return 1
        },
        Bb: function(a, b, c, d) {
            if (62E3 != a)
                return y.Ig(12296),
                0;
            if (0 != d && 62004 != d)
                return y.Ig(12294),
                0;
            if (0 != c && 62006 != c || 0 != b && 62006 != b)
                return y.Ig(12301),
                0;
            p.ti(d ? y.context : null);
            y.Tg = d;
            y.Ki = b;
            y.Li = c;
            y.Ig(12288);
            return 1
        },
        Da: function(a, b) {
            if (62E3 != a)
                return y.Ig(12296),
                0;
            y.Ig(12288);
            if (y.ei[b])
                return y.ei[b];
            switch (b) {
            case 12371:
                a = xa("Emscripten");
                break;
            case 12372:
                a = xa("1.4 Emscripten EGL");
                break;
            case 12373:
                a = xa("");
                break;
            case 12429:
                a = xa("OpenGL_ES");
                break;
            default:
                return y.Ig(12300),
                0
            }
            return y.ei[b] = a
        },
        qb: function() {
            if (y.oj)
                if (l.lh)
                    if (l.lh.isContextLost())
                        y.Ig(12302);
                    else
                        return y.Ig(12288),
                        1;
                else
                    y.Ig(12290);
            else
                y.Ig(12289);
            return 0
        },
        fb: function(a, b) {
            if (62E3 != a)
                return y.Ig(12296),
                0;
            0 == b ? Ja(0, 0) : Ja(1, b);
            y.Ig(12288);
            return 1
        },
        Zc: function(a) {
            if (62E3 != a)
                return y.Ig(12296),
                0;
            y.Tg = 0;
            y.Li = 0;
            y.Ki = 0;
            y.oj = !1;
            y.Ig(12288);
            return 1
        },
        Na: function() {
            y.Ig(12288);
            return 1
        },
        Wa: function() {
            y.Ig(12288);
            return 1
        },
        c: Fc,
        a: Fc,
        d: function(a, b, c) {
            b = Ec(b, c);
            return Gc[a].apply(null, b)
        },
        ua: function() {
            if (!w.fullscreenEnabled())
                return -1;
            w.Pk(Eb);
            var a = ab[1];
            if (a.exitFullscreen)
                a.fullscreenElement && a.exitFullscreen();
            else if (a.webkitExitFullscreen)
                a.webkitFullscreenElement && a.webkitExitFullscreen();
            else
                return -1;
            return 0
        },
        za: function() {
            w.Pk(Fb);
            if (document.exitPointerLock)
                document.exitPointerLock();
            else if (document.$l)
                document.$l();
            else
                return -1;
            return 0
        },
        ya: function() {
            throw "unwind";
        },
        h: function() {
            return devicePixelRatio
        },
        f: function(a, b, c) {
            a = da(a);
            if (!a)
                return -4;
            a = cb(a);
            ha[b >> 3] = a.width;
            ha[c >> 3] = a.height;
            return 0
        },
        fe: function(a, b) {
            if (0 > a || a >= w.Qi.length)
                return -5;
            if (!w.Qi[a])
                return -7;
            Kc(b, w.Qi[a]);
            return 0
        },
        m: Bb,
        qe: function() {
            return w.Qi.length
        },
        Ba: function(a, b) {
            m[a >> 2] = screen.width;
            m[b >> 2] = screen.height
        },
        X: function(a) {
            k.activeTexture(a)
        },
        W: function(a, b) {
            k.attachShader(p.Lg[a], p.Xg[b])
        },
        Mc: function(a, b) {
            k.beginQuery(a, p.Rg[b])
        },
        na: function(a, b) {
            k.$g.beginQueryEXT(a, p.Rg[b])
        },
        rc: function(a) {
            k.beginTransformFeedback(a)
        },
        V: function(a, b, c) {
            k.bindAttribLocation(p.Lg[a], b, z(c))
        },
        U: function(a, b) {
            35051 == a ? k.nj = b : 35052 == a && (k.mh = b);
            k.bindBuffer(a, p.Hh[b])
        },
        oc: function(a, b, c) {
            k.bindBufferBase(a, b, p.Hh[c])
        },
        pc: function(a, b, c, d, e) {
            k.bindBufferRange(a, b, p.Hh[c], d, e)
        },
        T: function(a, b) {
            k.bindFramebuffer(a, p.oi[b])
        },
        S: function(a, b) {
            k.bindRenderbuffer(a, p.ci[b])
        },
        rb: function(a, b) {
            k.bindSampler(a, p.jh[b])
        },
        R: function(a, b) {
            k.bindTexture(a, p.Ph[b])
        },
        ib: function(a, b) {
            k.bindTransformFeedback(a, p.Di[b])
        },
        xc: function(a) {
            k.bindVertexArray(p.uh[a])
        },
        ea: function(a) {
            k.bindVertexArray(p.uh[a])
        },
        Q: function(a, b, c, d) {
            k.blendColor(a, b, c, d)
        },
        P: function(a) {
            k.blendEquation(a)
        },
        Kf: function(a, b) {
            k.blendEquationSeparate(a, b)
        },
        Jf: function(a, b) {
            k.blendFunc(a, b)
        },
        If: function(a, b, c, d) {
            k.blendFuncSeparate(a, b, c, d)
        },
        Ac: function(a, b, c, d, e, f, h, n, q, u) {
            k.blitFramebuffer(a, b, c, d, e, f, h, n, q, u)
        },
        Hf: function(a, b, c, d) {
            c && b ? k.bufferData(a, O, d, c, b) : k.bufferData(a, b, d)
        },
        Gf: function(a, b, c, d) {
            c && k.bufferSubData(a, b, O, d, c)
        },
        Ff: function(a) {
            return k.checkFramebufferStatus(a)
        },
        Ef: function(a) {
            k.clear(a)
        },
        Rb: function(a, b, c, d) {
            k.clearBufferfi(a, b, c, d)
        },
        Sb: function(a, b, c) {
            k.clearBufferfv(a, b, J, c >> 2)
        },
        Ub: function(a, b, c) {
            k.clearBufferiv(a, b, m, c >> 2)
        },
        Tb: function(a, b, c) {
            k.clearBufferuiv(a, b, B, c >> 2)
        },
        Df: function(a, b, c, d) {
            k.clearColor(a, b, c, d)
        },
        Cf: function(a) {
            k.clearDepth(a)
        },
        Bf: function(a) {
            k.clearStencil(a)
        },
        Ab: function(a, b, c, d) {
            return k.clientWaitSync(p.Gh[a], b, (c >>> 0) + 4294967296 * d)
        },
        Af: function(a, b, c, d) {
            k.colorMask(!!a, !!b, !!c, !!d)
        },
        zf: function(a) {
            k.compileShader(p.Xg[a])
        },
        yf: function(a, b, c, d, e, f, h, n) {
            k.mh || !h ? k.compressedTexImage2D(a, b, c, d, e, f, h, n) : k.compressedTexImage2D(a, b, c, d, e, f, O, n, h)
        },
        Sc: function(a, b, c, d, e, f, h, n, q) {
            k.mh ? k.compressedTexImage3D(a, b, c, d, e, f, h, n, q) : k.compressedTexImage3D(a, b, c, d, e, f, h, O, q, n)
        },
        xf: function(a, b, c, d, e, f, h, n, q) {
            k.mh || !n ? k.compressedTexSubImage2D(a, b, c, d, e, f, h, n, q) : k.compressedTexSubImage2D(a, b, c, d, e, f, h, O, q, n)
        },
        Rc: function(a, b, c, d, e, f, h, n, q, u, v) {
            k.mh ? k.compressedTexSubImage3D(a, b, c, d, e, f, h, n, q, u, v) : k.compressedTexSubImage3D(a, b, c, d, e, f, h, n, q, O, v, u)
        },
        Pb: function(a, b, c, d, e) {
            k.copyBufferSubData(a, b, c, d, e)
        },
        wf: function(a, b, c, d, e, f, h, n) {
            k.copyTexImage2D(a, b, c, d, e, f, h, n)
        },
        vf: function(a, b, c, d, e, f, h, n) {
            k.copyTexSubImage2D(a, b, c, d, e, f, h, n)
        },
        Tc: function(a, b, c, d, e, f, h, n, q) {
            k.copyTexSubImage3D(a, b, c, d, e, f, h, n, q)
        },
        uf: function() {
            var a = p.Uh(p.Lg)
              , b = k.createProgram();
            b.name = a;
            b.Ui = b.Si = b.Ti = 0;
            b.Wj = 1;
            p.Lg[a] = b;
            return a
        },
        tf: function(a) {
            var b = p.Uh(p.Xg);
            p.Xg[b] = k.createShader(a);
            return b
        },
        sf: function(a) {
            k.cullFace(a)
        },
        rf: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2]
                  , e = p.Hh[d];
                e && (k.deleteBuffer(e),
                e.name = 0,
                p.Hh[d] = null,
                d == k.nj && (k.nj = 0),
                d == k.mh && (k.mh = 0))
            }
        },
        pf: function(a, b) {
            for (var c = 0; c < a; ++c) {
                var d = m[b + 4 * c >> 2]
                  , e = p.oi[d];
                e && (k.deleteFramebuffer(e),
                e.name = 0,
                p.oi[d] = null)
            }
        },
        of: function(a) {
            if (a) {
                var b = p.Lg[a];
                b ? (k.deleteProgram(b),
                b.name = 0,
                p.Lg[a] = null) : p.Fg(1281)
            }
        },
        Pc: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2]
                  , e = p.Rg[d];
                e && (k.deleteQuery(e),
                p.Rg[d] = null)
            }
        },
        pa: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2]
                  , e = p.Rg[d];
                e && (k.$g.deleteQueryEXT(e),
                p.Rg[d] = null)
            }
        },
        nf: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2]
                  , e = p.ci[d];
                e && (k.deleteRenderbuffer(e),
                e.name = 0,
                p.ci[d] = null)
            }
        },
        tb: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2]
                  , e = p.jh[d];
                e && (k.deleteSampler(e),
                e.name = 0,
                p.jh[d] = null)
            }
        },
        mf: function(a) {
            if (a) {
                var b = p.Xg[a];
                b ? (k.deleteShader(b),
                p.Xg[a] = null) : p.Fg(1281)
            }
        },
        Cb: function(a) {
            if (a) {
                var b = p.Gh[a];
                b ? (k.deleteSync(b),
                b.name = 0,
                p.Gh[a] = null) : p.Fg(1281)
            }
        },
        lf: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2]
                  , e = p.Ph[d];
                e && (k.deleteTexture(e),
                e.name = 0,
                p.Ph[d] = null)
            }
        },
        hb: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2]
                  , e = p.Di[d];
                e && (k.deleteTransformFeedback(e),
                e.name = 0,
                p.Di[d] = null)
            }
        },
        wc: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2];
                k.deleteVertexArray(p.uh[d]);
                p.uh[d] = null
            }
        },
        da: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2];
                k.deleteVertexArray(p.uh[d]);
                p.uh[d] = null
            }
        },
        kf: function(a) {
            k.depthFunc(a)
        },
        jf: function(a) {
            k.depthMask(!!a)
        },
        hf: function(a, b) {
            k.depthRange(a, b)
        },
        gf: function(a, b) {
            k.detachShader(p.Lg[a], p.Xg[b])
        },
        ff: function(a) {
            k.disable(a)
        },
        ef: function(a) {
            k.disableVertexAttribArray(a)
        },
        df: function(a, b, c) {
            k.drawArrays(a, b, c)
        },
        Gb: function(a, b, c, d) {
            k.drawArraysInstanced(a, b, c, d)
        },
        $: function(a, b, c, d) {
            k.drawArraysInstanced(a, b, c, d)
        },
        bd: function(a, b, c, d) {
            k.drawArraysInstanced(a, b, c, d)
        },
        cd: function(a, b, c, d) {
            k.drawArraysInstanced(a, b, c, d)
        },
        Ta: function(a, b, c, d) {
            k.drawArraysInstanced(a, b, c, d)
        },
        Ic: function(a, b) {
            for (var c = Da[a], d = 0; d < a; d++)
                c[d] = m[b + 4 * d >> 2];
            k.drawBuffers(c)
        },
        Yc: function(a, b) {
            for (var c = Da[a], d = 0; d < a; d++)
                c[d] = m[b + 4 * d >> 2];
            k.drawBuffers(c)
        },
        aa: function(a, b) {
            for (var c = Da[a], d = 0; d < a; d++)
                c[d] = m[b + 4 * d >> 2];
            k.drawBuffers(c)
        },
        cf: function(a, b, c, d) {
            k.drawElements(a, b, c, d)
        },
        Fb: function(a, b, c, d, e) {
            k.drawElementsInstanced(a, b, c, d, e)
        },
        _: function(a, b, c, d, e) {
            k.drawElementsInstanced(a, b, c, d, e)
        },
        _c: function(a, b, c, d, e) {
            k.drawElementsInstanced(a, b, c, d, e)
        },
        $c: function(a, b, c, d, e) {
            k.drawElementsInstanced(a, b, c, d, e)
        },
        ad: function(a, b, c, d, e) {
            k.drawElementsInstanced(a, b, c, d, e)
        },
        Wc: function(a, b, c, d, e, f) {
            k.drawElements(a, d, e, f)
        },
        bf: function(a) {
            k.enable(a)
        },
        af: function(a) {
            k.enableVertexAttribArray(a)
        },
        Lc: function(a) {
            k.endQuery(a)
        },
        ma: function(a) {
            k.$g.endQueryEXT(a)
        },
        qc: function() {
            k.endTransformFeedback()
        },
        Eb: function(a, b) {
            return (a = k.fenceSync(a, b)) ? (b = p.Uh(p.Gh),
            a.name = b,
            p.Gh[b] = a,
            b) : 0
        },
        $e: function() {
            k.finish()
        },
        _e: function() {
            k.flush()
        },
        Ze: function(a, b, c, d) {
            k.framebufferRenderbuffer(a, b, c, p.ci[d])
        },
        Ye: function(a, b, c, d, e) {
            k.framebufferTexture2D(a, b, c, p.Ph[d], e)
        },
        yc: function(a, b, c, d, e) {
            k.framebufferTextureLayer(a, b, p.Ph[c], d, e)
        },
        Xe: function(a) {
            k.frontFace(a)
        },
        Ve: function(a, b) {
            oa(a, b, "createBuffer", p.Hh)
        },
        Te: function(a, b) {
            oa(a, b, "createFramebuffer", p.oi)
        },
        Qc: function(a, b) {
            oa(a, b, "createQuery", p.Rg)
        },
        qa: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = k.$g.createQueryEXT();
                if (!d) {
                    for (p.Fg(1282); c < a; )
                        m[b + 4 * c++ >> 2] = 0;
                    break
                }
                var e = p.Uh(p.Rg);
                d.name = e;
                p.Rg[e] = d;
                m[b + 4 * c >> 2] = e
            }
        },
        Se: function(a, b) {
            oa(a, b, "createRenderbuffer", p.ci)
        },
        ub: function(a, b) {
            oa(a, b, "createSampler", p.jh)
        },
        Re: function(a, b) {
            oa(a, b, "createTexture", p.Ph)
        },
        gb: function(a, b) {
            oa(a, b, "createTransformFeedback", p.Di)
        },
        vc: function(a, b) {
            oa(a, b, "createVertexArray", p.uh)
        },
        ca: function(a, b) {
            oa(a, b, "createVertexArray", p.uh)
        },
        Ue: function(a) {
            k.generateMipmap(a)
        },
        Qe: function(a, b, c, d, e, f, h) {
            Lc("getActiveAttrib", a, b, c, d, e, f, h)
        },
        Pe: function(a, b, c, d, e, f, h) {
            Lc("getActiveUniform", a, b, c, d, e, f, h)
        },
        Ib: function(a, b, c, d, e) {
            a = p.Lg[a];
            if (a = k.getActiveUniformBlockName(a, b))
                e && 0 < c ? (c = N(a, e, c),
                d && (m[d >> 2] = c)) : d && (m[d >> 2] = 0)
        },
        Jb: function(a, b, c, d) {
            if (d)
                if (a = p.Lg[a],
                35393 == c)
                    c = k.getActiveUniformBlockName(a, b),
                    m[d >> 2] = c.length + 1;
                else {
                    if (a = k.getActiveUniformBlockParameter(a, b, c),
                    null !== a)
                        if (35395 == c)
                            for (c = 0; c < a.length; c++)
                                m[d + 4 * c >> 2] = a[c];
                        else
                            m[d >> 2] = a
                }
            else
                p.Fg(1281)
        },
        Lb: function(a, b, c, d, e) {
            if (e)
                if (0 < b && 0 == c)
                    p.Fg(1281);
                else {
                    a = p.Lg[a];
                    for (var f = [], h = 0; h < b; h++)
                        f.push(m[c + 4 * h >> 2]);
                    if (a = k.getActiveUniforms(a, f, d))
                        for (b = a.length,
                        h = 0; h < b; h++)
                            m[e + 4 * h >> 2] = a[h]
                }
            else
                p.Fg(1281)
        },
        Oe: function(a, b, c, d) {
            a = k.getAttachedShaders(p.Lg[a]);
            var e = a.length;
            e > b && (e = b);
            m[c >> 2] = e;
            for (b = 0; b < e; ++b)
                m[d + 4 * b >> 2] = p.Xg.indexOf(a[b])
        },
        Ne: function(a, b) {
            return k.getAttribLocation(p.Lg[a], z(b))
        },
        Me: function(a, b) {
            db(a, b, 4)
        },
        vb: function(a, b, c) {
            c ? Ma(c, k.getBufferParameter(a, b)) : p.Fg(1281)
        },
        Le: function(a, b, c) {
            c ? m[c >> 2] = k.getBufferParameter(a, b) : p.Fg(1281)
        },
        Ke: function() {
            var a = k.getError() || p.Ej;
            p.Ej = 0;
            return a
        },
        Je: function(a, b) {
            db(a, b, 2)
        },
        cc: function(a, b) {
            return k.getFragDataLocation(p.Lg[a], z(b))
        },
        Ie: function(a, b, c, d) {
            a = k.getFramebufferAttachmentParameter(a, b, c);
            if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture)
                a = a.name | 0;
            m[d >> 2] = a
        },
        wb: function(a, b, c) {
            Mc(a, b, c, 1)
        },
        yb: function(a, b) {
            db(a, b, 1)
        },
        tc: function(a, b, c) {
            Mc(a, b, c, 0)
        },
        He: function(a, b) {
            db(a, b, 0)
        },
        Va: function(a, b, c, d, e) {
            if (0 > d)
                p.Fg(1281);
            else if (e) {
                if (a = k.getInternalformatParameter(a, b, c),
                null !== a)
                    for (b = 0; b < a.length && b < d; ++b)
                        m[e + 4 * b >> 2] = a[b]
            } else
                p.Fg(1281)
        },
        bb: function() {
            p.Fg(1282)
        },
        Fe: function(a, b, c, d) {
            a = k.getProgramInfoLog(p.Lg[a]);
            null === a && (a = "(unknown error)");
            b = 0 < b && d ? N(a, d, b) : 0;
            c && (m[c >> 2] = b)
        },
        Ge: function(a, b, c) {
            if (c)
                if (a >= p.counter)
                    p.Fg(1281);
                else if (a = p.Lg[a],
                35716 == b)
                    a = k.getProgramInfoLog(a),
                    null === a && (a = "(unknown error)"),
                    m[c >> 2] = a.length + 1;
                else if (35719 == b) {
                    if (!a.Ui)
                        for (b = 0; b < k.getProgramParameter(a, 35718); ++b)
                            a.Ui = Math.max(a.Ui, k.getActiveUniform(a, b).name.length + 1);
                    m[c >> 2] = a.Ui
                } else if (35722 == b) {
                    if (!a.Si)
                        for (b = 0; b < k.getProgramParameter(a, 35721); ++b)
                            a.Si = Math.max(a.Si, k.getActiveAttrib(a, b).name.length + 1);
                    m[c >> 2] = a.Si
                } else if (35381 == b) {
                    if (!a.Ti)
                        for (b = 0; b < k.getProgramParameter(a, 35382); ++b)
                            a.Ti = Math.max(a.Ti, k.getActiveUniformBlockName(a, b).length + 1);
                    m[c >> 2] = a.Ti
                } else
                    m[c >> 2] = k.getProgramParameter(a, b);
            else
                p.Fg(1281)
        },
        ga: function(a, b, c) {
            c ? (a = p.Rg[a],
            b = 2 > p.Tg.version ? k.$g.getQueryObjectEXT(a, b) : k.getQueryParameter(a, b),
            Ma(c, "boolean" == typeof b ? b ? 1 : 0 : b)) : p.Fg(1281)
        },
        ja: function(a, b, c) {
            c ? (a = k.$g.getQueryObjectEXT(p.Rg[a], b),
            m[c >> 2] = "boolean" == typeof a ? a ? 1 : 0 : a) : p.Fg(1281)
        },
        fa: function(a, b, c) {
            c ? (a = p.Rg[a],
            b = 2 > p.Tg.version ? k.$g.getQueryObjectEXT(a, b) : k.getQueryParameter(a, b),
            Ma(c, "boolean" == typeof b ? b ? 1 : 0 : b)) : p.Fg(1281)
        },
        Jc: function(a, b, c) {
            c ? (a = k.getQueryParameter(p.Rg[a], b),
            m[c >> 2] = "boolean" == typeof a ? a ? 1 : 0 : a) : p.Fg(1281)
        },
        ha: function(a, b, c) {
            c ? (a = k.$g.getQueryObjectEXT(p.Rg[a], b),
            m[c >> 2] = "boolean" == typeof a ? a ? 1 : 0 : a) : p.Fg(1281)
        },
        Kc: function(a, b, c) {
            c ? m[c >> 2] = k.getQuery(a, b) : p.Fg(1281)
        },
        ka: function(a, b, c) {
            c ? m[c >> 2] = k.$g.getQueryEXT(a, b) : p.Fg(1281)
        },
        Ee: function(a, b, c) {
            c ? m[c >> 2] = k.getRenderbufferParameter(a, b) : p.Fg(1281)
        },
        kb: function(a, b, c) {
            c ? J[c >> 2] = k.getSamplerParameter(p.jh[a], b) : p.Fg(1281)
        },
        lb: function(a, b, c) {
            c ? m[c >> 2] = k.getSamplerParameter(p.jh[a], b) : p.Fg(1281)
        },
        Ce: function(a, b, c, d) {
            a = k.getShaderInfoLog(p.Xg[a]);
            null === a && (a = "(unknown error)");
            b = 0 < b && d ? N(a, d, b) : 0;
            c && (m[c >> 2] = b)
        },
        Ae: function(a, b, c, d) {
            a = k.getShaderPrecisionFormat(a, b);
            m[c >> 2] = a.rangeMin;
            m[c + 4 >> 2] = a.rangeMax;
            m[d >> 2] = a.precision
        },
        ze: function(a, b, c, d) {
            if (a = k.getShaderSource(p.Xg[a]))
                b = 0 < b && d ? N(a, d, b) : 0,
                c && (m[c >> 2] = b)
        },
        De: function(a, b, c) {
            c ? 35716 == b ? (a = k.getShaderInfoLog(p.Xg[a]),
            null === a && (a = "(unknown error)"),
            m[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = k.getShaderSource(p.Xg[a]),
            m[c >> 2] = a ? a.length + 1 : 0) : m[c >> 2] = k.getShaderParameter(p.Xg[a], b) : p.Fg(1281)
        },
        ye: function(a) {
            var b = p.ei[a];
            if (!b) {
                switch (a) {
                case 7939:
                    b = k.getSupportedExtensions() || [];
                    b = b.concat(b.map(function(d) {
                        return "GL_" + d
                    }));
                    b = Na(b.join(" "));
                    break;
                case 7936:
                case 7937:
                case 37445:
                case 37446:
                    (b = k.getParameter(a)) || p.Fg(1280);
                    b = b && Na(b);
                    break;
                case 7938:
                    b = Na("OpenGL ES 3.0 (" + k.getParameter(7938) + ")");
                    break;
                case 35724:
                    b = k.getParameter(35724);
                    var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                    null !== c && (3 == c[1].length && (c[1] += "0"),
                    b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                    b = Na(b);
                    break;
                default:
                    p.Fg(1280)
                }
                p.ei[a] = b
            }
            return b
        },
        Qb: function(a, b) {
            if (2 > p.Tg.version)
                return p.Fg(1282),
                0;
            var c = p.Rk[a];
            if (c)
                return 0 > b || b >= c.length ? (p.Fg(1281),
                0) : c[b];
            switch (a) {
            case 7939:
                return c = k.getSupportedExtensions() || [],
                c = c.concat(c.map(function(d) {
                    return "GL_" + d
                })),
                c = c.map(function(d) {
                    return Na(d)
                }),
                c = p.Rk[a] = c,
                0 > b || b >= c.length ? (p.Fg(1281),
                0) : c[b];
            default:
                return p.Fg(1280),
                0
            }
        },
        xb: function(a, b, c, d, e) {
            0 > c ? p.Fg(1281) : e ? (a = k.getSyncParameter(p.Gh[a], b),
            null !== a && (m[e >> 2] = a,
            d && (m[d >> 2] = 1))) : p.Fg(1281)
        },
        xe: function(a, b, c) {
            c ? J[c >> 2] = k.getTexParameter(a, b) : p.Fg(1281)
        },
        we: function(a, b, c) {
            c ? m[c >> 2] = k.getTexParameter(a, b) : p.Fg(1281)
        },
        mc: function(a, b, c, d, e, f, h) {
            a = p.Lg[a];
            if (a = k.getTransformFeedbackVarying(a, b))
                h && 0 < c ? (c = N(a.name, h, c),
                d && (m[d >> 2] = c)) : d && (m[d >> 2] = 0),
                e && (m[e >> 2] = a.size),
                f && (m[f >> 2] = a.type)
        },
        Kb: function(a, b) {
            return k.getUniformBlockIndex(p.Lg[a], z(b))
        },
        Ob: function(a, b, c, d) {
            if (d)
                if (0 < b && (0 == c || 0 == d))
                    p.Fg(1281);
                else {
                    a = p.Lg[a];
                    for (var e = [], f = 0; f < b; f++)
                        e.push(z(m[c + 4 * f >> 2]));
                    if (a = k.getUniformIndices(a, e))
                        for (b = a.length,
                        f = 0; f < b; f++)
                            m[d + 4 * f >> 2] = a[f]
                }
            else
                p.Fg(1281)
        },
        te: function(a, b) {
            b = z(b);
            if (a = p.Lg[a]) {
                Oc(a);
                var c = a.Ei
                  , d = 0
                  , e = b
                  , f = Nc(b);
                0 < f && (d = parseInt(b.slice(f + 1)) >>> 0,
                e = b.slice(0, f));
                if ((e = a.Yk[e]) && d < e[0] && (d += e[1],
                c[d] = c[d] || k.getUniformLocation(a, b)))
                    return d
            } else
                p.Fg(1281);
            return -1
        },
        ve: function(a, b, c) {
            Gb(a, b, c, 2)
        },
        ue: function(a, b, c) {
            Gb(a, b, c, 0)
        },
        dc: function(a, b, c) {
            Gb(a, b, c, 0)
        },
        kc: function(a, b, c) {
            eb(a, b, c, 0)
        },
        jc: function(a, b, c) {
            eb(a, b, c, 0)
        },
        pe: function(a, b, c) {
            c ? m[c >> 2] = k.getVertexAttribOffset(a, b) : p.Fg(1281)
        },
        se: function(a, b, c) {
            eb(a, b, c, 2)
        },
        re: function(a, b, c) {
            eb(a, b, c, 5)
        },
        oe: function(a, b) {
            k.hint(a, b)
        },
        _a: function(a, b, c) {
            for (var d = Da[b], e = 0; e < b; e++)
                d[e] = m[c + 4 * e >> 2];
            k.invalidateFramebuffer(a, d)
        },
        Za: function(a, b, c, d, e, f, h) {
            for (var n = Da[b], q = 0; q < b; q++)
                n[q] = m[c + 4 * q >> 2];
            k.invalidateSubFramebuffer(a, n, d, e, f, h)
        },
        ne: function(a) {
            return (a = p.Hh[a]) ? k.isBuffer(a) : 0
        },
        me: function(a) {
            return k.isEnabled(a)
        },
        le: function(a) {
            return (a = p.oi[a]) ? k.isFramebuffer(a) : 0
        },
        ke: function(a) {
            return (a = p.Lg[a]) ? k.isProgram(a) : 0
        },
        Nc: function(a) {
            return (a = p.Rg[a]) ? k.isQuery(a) : 0
        },
        oa: function(a) {
            return (a = p.Rg[a]) ? k.$g.isQueryEXT(a) : 0
        },
        je: function(a) {
            return (a = p.ci[a]) ? k.isRenderbuffer(a) : 0
        },
        sb: function(a) {
            return (a = p.jh[a]) ? k.isSampler(a) : 0
        },
        ie: function(a) {
            return (a = p.Xg[a]) ? k.isShader(a) : 0
        },
        Db: function(a) {
            return k.isSync(p.Gh[a])
        },
        he: function(a) {
            return (a = p.Ph[a]) ? k.isTexture(a) : 0
        },
        eb: function(a) {
            return k.isTransformFeedback(p.Di[a])
        },
        uc: function(a) {
            return (a = p.uh[a]) ? k.isVertexArray(a) : 0
        },
        ba: function(a) {
            return (a = p.uh[a]) ? k.isVertexArray(a) : 0
        },
        ge: function(a) {
            k.lineWidth(a)
        },
        ee: function(a) {
            a = p.Lg[a];
            k.linkProgram(a);
            a.Ei = 0;
            a.Yk = {}
        },
        db: function() {
            k.pauseTransformFeedback()
        },
        de: function(a, b) {
            3317 == a && (p.Cm = b);
            k.pixelStorei(a, b)
        },
        ce: function(a, b) {
            k.polygonOffset(a, b)
        },
        ab: function() {
            p.Fg(1280)
        },
        $a: function() {
            p.Fg(1280)
        },
        la: function(a, b) {
            k.$g.queryCounterEXT(p.Rg[a], b)
        },
        Xc: function(a) {
            k.readBuffer(a)
        },
        be: function(a, b, c, d, e, f, h) {
            if (k.nj)
                k.readPixels(a, b, c, d, e, f, h);
            else {
                var n = Oa(f);
                k.readPixels(a, b, c, d, e, f, n, h >> Pa(n))
            }
        },
        ae: function() {},
        $d: function(a, b, c, d) {
            k.renderbufferStorage(a, b, c, d)
        },
        zc: function(a, b, c, d, e) {
            k.renderbufferStorageMultisample(a, b, c, d, e)
        },
        cb: function() {
            k.resumeTransformFeedback()
        },
        _d: function(a, b) {
            k.sampleCoverage(a, !!b)
        },
        nb: function(a, b, c) {
            k.samplerParameterf(p.jh[a], b, c)
        },
        mb: function(a, b, c) {
            k.samplerParameterf(p.jh[a], b, J[c >> 2])
        },
        pb: function(a, b, c) {
            k.samplerParameteri(p.jh[a], b, c)
        },
        ob: function(a, b, c) {
            k.samplerParameteri(p.jh[a], b, m[c >> 2])
        },
        Zd: function(a, b, c, d) {
            k.scissor(a, b, c, d)
        },
        Yd: function() {
            p.Fg(1280)
        },
        Xd: function(a, b, c, d) {
            b = p.Jl(a, b, c, d);
            k.shaderSource(p.Xg[a], b)
        },
        Wd: function(a, b, c) {
            k.stencilFunc(a, b, c)
        },
        Vd: function(a, b, c, d) {
            k.stencilFuncSeparate(a, b, c, d)
        },
        Ud: function(a) {
            k.stencilMask(a)
        },
        Td: function(a, b) {
            k.stencilMaskSeparate(a, b)
        },
        Sd: function(a, b, c) {
            k.stencilOp(a, b, c)
        },
        Rd: function(a, b, c, d) {
            k.stencilOpSeparate(a, b, c, d)
        },
        Qd: function(a, b, c, d, e, f, h, n, q) {
            if (k.mh)
                k.texImage2D(a, b, c, d, e, f, h, n, q);
            else if (q) {
                var u = Oa(n);
                k.texImage2D(a, b, c, d, e, f, h, n, u, q >> Pa(u))
            } else
                k.texImage2D(a, b, c, d, e, f, h, n, null)
        },
        Vc: function(a, b, c, d, e, f, h, n, q, u) {
            if (k.mh)
                k.texImage3D(a, b, c, d, e, f, h, n, q, u);
            else if (u) {
                var v = Oa(q);
                k.texImage3D(a, b, c, d, e, f, h, n, q, v, u >> Pa(v))
            } else
                k.texImage3D(a, b, c, d, e, f, h, n, q, null)
        },
        Pd: function(a, b, c) {
            k.texParameterf(a, b, c)
        },
        Od: function(a, b, c) {
            k.texParameterf(a, b, J[c >> 2])
        },
        Nd: function(a, b, c) {
            k.texParameteri(a, b, c)
        },
        Md: function(a, b, c) {
            k.texParameteri(a, b, m[c >> 2])
        },
        Ya: function(a, b, c, d, e) {
            k.texStorage2D(a, b, c, d, e)
        },
        Xa: function(a, b, c, d, e, f) {
            k.texStorage3D(a, b, c, d, e, f)
        },
        Ld: function(a, b, c, d, e, f, h, n, q) {
            if (k.mh)
                k.texSubImage2D(a, b, c, d, e, f, h, n, q);
            else if (q) {
                var u = Oa(n);
                k.texSubImage2D(a, b, c, d, e, f, h, n, u, q >> Pa(u))
            } else
                k.texSubImage2D(a, b, c, d, e, f, h, n, null)
        },
        Uc: function(a, b, c, d, e, f, h, n, q, u, v) {
            if (k.mh)
                k.texSubImage3D(a, b, c, d, e, f, h, n, q, u, v);
            else if (v) {
                var A = Oa(u);
                k.texSubImage3D(a, b, c, d, e, f, h, n, q, u, A, v >> Pa(A))
            } else
                k.texSubImage3D(a, b, c, d, e, f, h, n, q, u, null)
        },
        nc: function(a, b, c, d) {
            a = p.Lg[a];
            for (var e = [], f = 0; f < b; f++)
                e.push(z(m[c + 4 * f >> 2]));
            k.transformFeedbackVaryings(a, e, d)
        },
        Kd: function(a, b) {
            k.uniform1f(K(a), b)
        },
        Jd: function(a, b, c) {
            b && k.uniform1fv(K(a), J, c >> 2, b)
        },
        Id: function(a, b) {
            k.uniform1i(K(a), b)
        },
        Hd: function(a, b, c) {
            b && k.uniform1iv(K(a), m, c >> 2, b)
        },
        bc: function(a, b) {
            k.uniform1ui(K(a), b)
        },
        Zb: function(a, b, c) {
            b && k.uniform1uiv(K(a), B, c >> 2, b)
        },
        Gd: function(a, b, c) {
            k.uniform2f(K(a), b, c)
        },
        Fd: function(a, b, c) {
            b && k.uniform2fv(K(a), J, c >> 2, 2 * b)
        },
        Ed: function(a, b, c) {
            k.uniform2i(K(a), b, c)
        },
        Dd: function(a, b, c) {
            b && k.uniform2iv(K(a), m, c >> 2, 2 * b)
        },
        ac: function(a, b, c) {
            k.uniform2ui(K(a), b, c)
        },
        Xb: function(a, b, c) {
            b && k.uniform2uiv(K(a), B, c >> 2, 2 * b)
        },
        Cd: function(a, b, c, d) {
            k.uniform3f(K(a), b, c, d)
        },
        Bd: function(a, b, c) {
            b && k.uniform3fv(K(a), J, c >> 2, 3 * b)
        },
        Ad: function(a, b, c, d) {
            k.uniform3i(K(a), b, c, d)
        },
        zd: function(a, b, c) {
            b && k.uniform3iv(K(a), m, c >> 2, 3 * b)
        },
        $b: function(a, b, c, d) {
            k.uniform3ui(K(a), b, c, d)
        },
        Wb: function(a, b, c) {
            b && k.uniform3uiv(K(a), B, c >> 2, 3 * b)
        },
        yd: function(a, b, c, d, e) {
            k.uniform4f(K(a), b, c, d, e)
        },
        xd: function(a, b, c) {
            b && k.uniform4fv(K(a), J, c >> 2, 4 * b)
        },
        wd: function(a, b, c, d, e) {
            k.uniform4i(K(a), b, c, d, e)
        },
        vd: function(a, b, c) {
            b && k.uniform4iv(K(a), m, c >> 2, 4 * b)
        },
        _b: function(a, b, c, d, e) {
            k.uniform4ui(K(a), b, c, d, e)
        },
        Vb: function(a, b, c) {
            b && k.uniform4uiv(K(a), B, c >> 2, 4 * b)
        },
        Hb: function(a, b, c) {
            a = p.Lg[a];
            k.uniformBlockBinding(a, b, c)
        },
        ud: function(a, b, c, d) {
            b && k.uniformMatrix2fv(K(a), !!c, J, d >> 2, 4 * b)
        },
        Hc: function(a, b, c, d) {
            b && k.uniformMatrix2x3fv(K(a), !!c, J, d >> 2, 6 * b)
        },
        Fc: function(a, b, c, d) {
            b && k.uniformMatrix2x4fv(K(a), !!c, J, d >> 2, 8 * b)
        },
        td: function(a, b, c, d) {
            b && k.uniformMatrix3fv(K(a), !!c, J, d >> 2, 9 * b)
        },
        Gc: function(a, b, c, d) {
            b && k.uniformMatrix3x2fv(K(a), !!c, J, d >> 2, 6 * b)
        },
        Cc: function(a, b, c, d) {
            b && k.uniformMatrix3x4fv(K(a), !!c, J, d >> 2, 12 * b)
        },
        sd: function(a, b, c, d) {
            b && k.uniformMatrix4fv(K(a), !!c, J, d >> 2, 16 * b)
        },
        Ec: function(a, b, c, d) {
            b && k.uniformMatrix4x2fv(K(a), !!c, J, d >> 2, 8 * b)
        },
        Bc: function(a, b, c, d) {
            b && k.uniformMatrix4x3fv(K(a), !!c, J, d >> 2, 12 * b)
        },
        rd: function(a) {
            a = p.Lg[a];
            k.useProgram(a);
            k.ql = a
        },
        qd: function(a) {
            k.validateProgram(p.Lg[a])
        },
        pd: function(a, b) {
            k.vertexAttrib1f(a, b)
        },
        od: function(a, b) {
            k.vertexAttrib1f(a, J[b >> 2])
        },
        nd: function(a, b, c) {
            k.vertexAttrib2f(a, b, c)
        },
        md: function(a, b) {
            k.vertexAttrib2f(a, J[b >> 2], J[b + 4 >> 2])
        },
        ld: function(a, b, c, d) {
            k.vertexAttrib3f(a, b, c, d)
        },
        kd: function(a, b) {
            k.vertexAttrib3f(a, J[b >> 2], J[b + 4 >> 2], J[b + 8 >> 2])
        },
        jd: function(a, b, c, d, e) {
            k.vertexAttrib4f(a, b, c, d, e)
        },
        hd: function(a, b) {
            k.vertexAttrib4f(a, J[b >> 2], J[b + 4 >> 2], J[b + 8 >> 2], J[b + 12 >> 2])
        },
        jb: function(a, b) {
            k.vertexAttribDivisor(a, b)
        },
        Y: function(a, b) {
            k.vertexAttribDivisor(a, b)
        },
        dd: function(a, b) {
            k.vertexAttribDivisor(a, b)
        },
        ed: function(a, b) {
            k.vertexAttribDivisor(a, b)
        },
        Ua: function(a, b) {
            k.vertexAttribDivisor(a, b)
        },
        ic: function(a, b, c, d, e) {
            k.vertexAttribI4i(a, b, c, d, e)
        },
        fc: function(a, b) {
            k.vertexAttribI4i(a, m[b >> 2], m[b + 4 >> 2], m[b + 8 >> 2], m[b + 12 >> 2])
        },
        gc: function(a, b, c, d, e) {
            k.vertexAttribI4ui(a, b, c, d, e)
        },
        ec: function(a, b) {
            k.vertexAttribI4ui(a, B[b >> 2], B[b + 4 >> 2], B[b + 8 >> 2], B[b + 12 >> 2])
        },
        lc: function(a, b, c, d, e) {
            k.vertexAttribIPointer(a, b, c, d, e)
        },
        gd: function(a, b, c, d, e, f) {
            k.vertexAttribPointer(a, b, c, !!d, e, f)
        },
        fd: function(a, b, c, d) {
            k.viewport(a, b, c, d)
        },
        zb: function(a, b, c, d) {
            k.waitSync(p.Gh[a], b, (c >>> 0) + 4294967296 * d)
        },
        n: function() {
            return 0
        },
        ta: function() {
            return !0
        },
        Ra: function(a, b, c) {
            O.copyWithin(a, b, b + c)
        },
        va: function(a, b, c) {
            return Lh(a, {
                Rj: m[c >> 2],
                kj: m[c + 4 >> 2],
                El: m[c + 8 >> 2],
                wl: b,
                Ii: m[c + 12 >> 2],
                ck: m[c + 16 >> 2]
            })
        },
        I: function(a, b) {
            a = da(a);
            return a ? a.requestPointerLock || a.Yi ? w.jj() ? Fb(a) : b ? (w.kk(Fb, 2, [a]),
            1) : -2 : -1 : -4
        },
        l: function() {
            fa("OOM")
        },
        Aa: function() {},
        Be: function() {
            return (w.Qi = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1
        },
        o: function(a, b, c) {
            if ("undefined" == typeof onbeforeunload)
                return -1;
            if (1 !== c)
                return -5;
            Mh(2, a, !0, b, 28, "beforeunload");
            return 0
        },
        A: function(a, b, c, d, e) {
            Pc(a, b, c, d, 12, "blur", e);
            return 0
        },
        g: Ic,
        k: function(a, b, c) {
            a = da(a);
            if (!a)
                return -4;
            a.style.width = b + "px";
            a.style.height = c + "px";
            return 0
        },
        B: function(a, b, c, d, e) {
            Pc(a, b, c, d, 13, "focus", e);
            return 0
        },
        r: function(a, b, c, d, e) {
            if (!w.fullscreenEnabled())
                return -1;
            a = da(a);
            if (!a)
                return -4;
            Qc(a, b, c, d, 19, "fullscreenchange", e);
            Qc(a, b, c, d, 19, "webkitfullscreenchange", e);
            return 0
        },
        j: function(a, b, c, d) {
            if (!navigator.getGamepads && !navigator.webkitGetGamepads)
                return -1;
            Rc(2, a, b, c, 26, "gamepadconnected", d);
            return 0
        },
        i: function(a, b, c, d) {
            if (!navigator.getGamepads && !navigator.webkitGetGamepads)
                return -1;
            Rc(2, a, b, c, 27, "gamepaddisconnected", d);
            return 0
        },
        u: function(a, b, c, d, e) {
            Hb(a, b, c, d, 2, "keydown", e);
            return 0
        },
        s: function(a, b, c, d, e) {
            Hb(a, b, c, d, 1, "keypress", e);
            return 0
        },
        t: function(a, b, c, d, e) {
            Hb(a, b, c, d, 3, "keyup", e);
            return 0
        },
        Nb: function(a, b, c) {
            a = V(a);
            Cc(a, b, c)
        },
        G: function(a, b, c, d, e) {
            Qa(a, b, c, d, 5, "mousedown", e);
            return 0
        },
        E: function(a, b, c, d, e) {
            Qa(a, b, c, d, 33, "mouseenter", e);
            return 0
        },
        D: function(a, b, c, d, e) {
            Qa(a, b, c, d, 34, "mouseleave", e);
            return 0
        },
        H: function(a, b, c, d, e) {
            Qa(a, b, c, d, 8, "mousemove", e);
            return 0
        },
        F: function(a, b, c, d, e) {
            Qa(a, b, c, d, 6, "mouseup", e);
            return 0
        },
        v: function(a, b, c, d, e) {
            if (!document || !document.body || !(document.body.requestPointerLock || document.body.ln || document.body.Hn || document.body.Yi))
                return -1;
            a = da(a);
            if (!a)
                return -4;
            fb(a, b, c, d, 20, "pointerlockchange", e);
            fb(a, b, c, d, 20, "mozpointerlockchange", e);
            fb(a, b, c, d, 20, "webkitpointerlockchange", e);
            fb(a, b, c, d, 20, "mspointerlockchange", e);
            return 0
        },
        q: function(a, b, c, d, e) {
            Nh(a, b, c, d, 10, "resize", e);
            return 0
        },
        w: function(a, b, c, d, e) {
            gb(a, b, c, d, 25, "touchcancel", e);
            return 0
        },
        y: function(a, b, c, d, e) {
            gb(a, b, c, d, 23, "touchend", e);
            return 0
        },
        x: function(a, b, c, d, e) {
            gb(a, b, c, d, 24, "touchmove", e);
            return 0
        },
        z: function(a, b, c, d, e) {
            gb(a, b, c, d, 22, "touchstart", e);
            return 0
        },
        p: function(a, b, c, d) {
            Oh(ab[1], a, b, c, 21, "visibilitychange", d);
            return 0
        },
        C: function(a, b, c, d, e) {
            a = da(a);
            return "undefined" != typeof a.onwheel ? (Ph(a, b, c, d, 9, "wheel", e),
            0) : -1
        },
        wa: function(a) {
            Wh(z(a))
        },
        ra: function(a, b, c, d, e) {
            function f(U) {
                I ? U() : $a(U)
            }
            var h = a + 112
              , n = z(h)
              , q = B[h + 36 >> 2]
              , u = B[h + 40 >> 2]
              , v = B[h + 44 >> 2]
              , A = B[h + 48 >> 2]
              , D = B[h + 52 >> 2]
              , t = !!(D & 4)
              , E = !!(D & 32)
              , L = !!(D & 16)
              , I = !!(D & 64)
              , P = U => {
                f( () => {
                    q ? V(q)(U) : b && b(U)
                }
                )
            }
              , la = U => {
                f( () => {
                    v ? V(v)(U) : d && d(U)
                }
                )
            }
              , C = U => {
                f( () => {
                    u ? V(u)(U) : c && c(U)
                }
                )
            }
              , Q = U => {
                f( () => {
                    A ? V(A)(U) : e && e(U)
                }
                )
            }
            ;
            D = U => {
                Ib(U, P, C, la, Q)
            }
            ;
            var aa = (U, nb) => {
                Tc(S.mi, U, nb.response, sa => {
                    f( () => {
                        q ? V(q)(sa) : b && b(sa)
                    }
                    )
                }
                , sa => {
                    f( () => {
                        q ? V(q)(sa) : b && b(sa)
                    }
                    )
                }
                )
            }
              , ia = U => {
                Ib(U, aa, C, la, Q)
            }
            ;
            if ("EM_IDB_STORE" === n)
                n = B[h + 84 >> 2],
                Tc(S.mi, a, O.slice(n, n + B[h + 88 >> 2]), P, C);
            else if ("EM_IDB_DELETE" === n)
                Rh(S.mi, a, P, C);
            else if (L) {
                if (E)
                    return 0;
                Ib(a, t ? aa : P, C, la, Q)
            } else
                Qh(S.mi, a, P, E ? C : t ? ia : D);
            return a
        },
        sa: function(a, b) {
            b >>= 2;
            b = {
                alpha: !!m[b + 0],
                depth: !!m[b + 1],
                stencil: !!m[b + 2],
                antialias: !!m[b + 3],
                premultipliedAlpha: !!m[b + 4],
                preserveDrawingBuffer: !!m[b + 5],
                powerPreference: Yh[m[b + 6]],
                failIfMajorPerformanceCaveat: !!m[b + 7],
                Gj: m[b + 8],
                Yl: m[b + 9],
                mk: m[b + 10],
                Bl: m[b + 11],
                sn: m[b + 12],
                wn: m[b + 13]
            };
            a = da(a);
            return !a || b.Bl ? 0 : p.li(a, b)
        },
        xa: function(a) {
            a >>= 2;
            for (var b = 0; 14 > b; ++b)
                m[a + b] = 0;
            m[a + 0] = m[a + 1] = m[a + 3] = m[a + 4] = m[a + 8] = m[a + 10] = 1
        },
        ia: function(a) {
            return p.ti(a) ? 0 : -5
        },
        Ia: function(a, b) {
            var c = 0;
            Ra().forEach(function(d, e) {
                var f = b + c;
                e = B[a + 4 * e >> 2] = f;
                for (f = 0; f < d.length; ++f)
                    Z[e++ >> 0] = d.charCodeAt(f);
                Z[e >> 0] = 0;
                c += d.length + 1
            });
            return 0
        },
        Ja: function(a, b) {
            var c = Ra();
            B[a >> 2] = c.length;
            var d = 0;
            c.forEach(function(e) {
                d += e.length + 1
            });
            B[b >> 2] = d;
            return 0
        },
        K: function(a) {
            try {
                var b = Y.Wh(a);
                g.close(b);
                return 0
            } catch (c) {
                if ("undefined" == typeof g || !(c instanceof g.Eg))
                    throw c;
                return c.nh
            }
        },
        La: function(a, b, c, d) {
            try {
                a: {
                    var e = Y.Wh(a);
                    a = b;
                    for (var f = b = 0; f < c; f++) {
                        var h = B[a >> 2]
                          , n = B[a + 4 >> 2];
                        a += 8;
                        var q = g.read(e, Z, h, n, void 0);
                        if (0 > q) {
                            var u = -1;
                            break a
                        }
                        b += q;
                        if (q < n)
                            break
                    }
                    u = b
                }
                m[d >> 2] = u;
                return 0
            } catch (v) {
                if ("undefined" == typeof g || !(v instanceof g.Eg))
                    throw v;
                return v.nh
            }
        },
        Ea: function(a, b, c, d, e) {
            try {
                b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
                if (isNaN(b))
                    return 61;
                var f = Y.Wh(a);
                g.qh(f, b, d);
                W = [f.position >>> 0, (G = f.position,
                1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
                m[e >> 2] = W[0];
                m[e + 4 >> 2] = W[1];
                f.xj && 0 === b && 0 === d && (f.xj = null);
                return 0
            } catch (h) {
                if ("undefined" == typeof g || !(h instanceof g.Eg))
                    throw h;
                return h.nh
            }
        },
        Ka: function(a, b, c, d) {
            try {
                a: {
                    var e = Y.Wh(a);
                    a = b;
                    for (var f = b = 0; f < c; f++) {
                        var h = B[a >> 2]
                          , n = B[a + 4 >> 2];
                        a += 8;
                        var q = g.write(e, Z, h, n, void 0);
                        if (0 > q) {
                            var u = -1;
                            break a
                        }
                        b += q
                    }
                    u = b
                }
                B[d >> 2] = u;
                return 0
            } catch (v) {
                if ("undefined" == typeof g || !(v instanceof g.Eg))
                    throw v;
                return v.nh
            }
        },
        Ga: hb,
        We: function(a) {
            k.clear(a)
        },
        Lf: function(a, b, c, d) {
            k.clearColor(a, b, c, d)
        },
        qf: function(a) {
            k.clearDepth(a)
        },
        O: function(a) {
            k.clearStencil(a)
        },
        N: function(a) {
            k.depthMask(!!a)
        },
        Z: function(a, b, c, d) {
            k.viewport(a, b, c, d)
        },
        Sa: Bc,
        J: function() {},
        Ha: function(a, b, c, d) {
            return Sh(a, b, c, d)
        }
    };
    (function() {
        function a(e) {
            l.asm = e.exports;
            nd = l.asm.Mf;
            od = e = nd.buffer;
            l.HEAP8 = Z = new Int8Array(e);
            l.HEAP16 = Ba = new Int16Array(e);
            l.HEAP32 = m = new Int32Array(e);
            l.HEAPU8 = O = new Uint8Array(e);
            l.HEAPU16 = T = new Uint16Array(e);
            l.HEAPU32 = B = new Uint32Array(e);
            l.HEAPF32 = J = new Float32Array(e);
            l.HEAPF64 = ha = new Float64Array(e);
            xc = l.asm.ug;
            Xc.unshift(l.asm.Nf);
            za("wasm-instantiate")
        }
        function b(e) {
            a(e.instance)
        }
        function c(e) {
            return Dh().then(function(f) {
                return WebAssembly.instantiate(f, d)
            }).then(function(f) {
                return f
            }).then(e, function(f) {
                ea("failed to asynchronously prepare wasm: " + f);
                fa(f)
            })
        }
        var d = {
            a: Zh
        };
        Wa("wasm-instantiate");
        if (l.instantiateWasm)
            try {
                return l.instantiateWasm(d, a)
            } catch (e) {
                return ea("Module.instantiateWasm callback failed with error: " + e),
                !1
            }
        (function() {
            return Ia || "function" != typeof WebAssembly.instantiateStreaming || qc(ma) || "function" != typeof fetch ? c(b) : fetch(ma, {
                credentials: "same-origin"
            }).then(function(e) {
                return WebAssembly.instantiateStreaming(e, d).then(b, function(f) {
                    ea("wasm streaming compile failed: " + f);
                    ea("falling back to ArrayBuffer instantiation");
                    return c(b)
                })
            })
        }
        )();
        return {}
    }
    )();
    l.___wasm_call_ctors = function() {
        return (l.___wasm_call_ctors = l.asm.Nf).apply(null, arguments)
    }
    ;
    var wa = l._free = function() {
        return (wa = l._free = l.asm.Of).apply(null, arguments)
    }
      , ba = l._malloc = function() {
        return (ba = l._malloc = l.asm.Pf).apply(null, arguments)
    }
      , Ub = l._cp6_canvas_context_lost = function() {
        return (Ub = l._cp6_canvas_context_lost = l.asm.Qf).apply(null, arguments)
    }
      , Vb = l._cp6_canvas_context_restored = function() {
        return (Vb = l._cp6_canvas_context_restored = l.asm.Rf).apply(null, arguments)
    }
      , jd = l._cp6_simulate_context_loss = function() {
        return (jd = l._cp6_simulate_context_loss = l.asm.Sf).apply(null, arguments)
    }
      , pd = l._cp6_timeout_fire = function() {
        return (pd = l._cp6_timeout_fire = l.asm.Tf).apply(null, arguments)
    }
      , qd = l._cp6_text_input_focus = function() {
        return (qd = l._cp6_text_input_focus = l.asm.Uf).apply(null, arguments)
    }
      , bd = l._cp6_on_paste = function() {
        return (bd = l._cp6_on_paste = l.asm.Vf).apply(null, arguments)
    }
      , dd = l._cp6_on_copy = function() {
        return (dd = l._cp6_on_copy = l.asm.Wf).apply(null, arguments)
    }
      , ed = l._cp6_on_cut = function() {
        return (ed = l._cp6_on_cut = l.asm.Xf).apply(null, arguments)
    }
      , rd = l._xsolla_close_iframe = function() {
        return (rd = l._xsolla_close_iframe = l.asm.Yf).apply(null, arguments)
    }
      , gd = l._cp6_force_disconnect = function() {
        return (gd = l._cp6_force_disconnect = l.asm.Zf).apply(null, arguments)
    }
      , hd = l._cp6_force_server_id = function() {
        return (hd = l._cp6_force_server_id = l.asm._f).apply(null, arguments)
    }
    ;
    l._main = function() {
        return (l._main = l.asm.$f).apply(null, arguments)
    }
    ;
    l._Util_GenerateMobImage = function() {
        return (l._Util_GenerateMobImage = l.asm.ag).apply(null, arguments)
    }
    ;
    l._Util_GeneratePetalImage = function() {
        return (l._Util_GeneratePetalImage = l.asm.bg).apply(null, arguments)
    }
    ;
    l._Util_GetMobs = function() {
        return (l._Util_GetMobs = l.asm.cg).apply(null, arguments)
    }
    ;
    l._Util_GetPetals = function() {
        return (l._Util_GetPetals = l.asm.dg).apply(null, arguments)
    }
    ;
    l._Util_GetTalents = function() {
        return (l._Util_GetTalents = l.asm.eg).apply(null, arguments)
    }
    ;
    l._Util_CalculateDropChance = function() {
        return (l._Util_CalculateDropChance = l.asm.fg).apply(null, arguments)
    }
    ;
    l._Util_GetAssemblerMatrix = function() {
        return (l._Util_GetAssemblerMatrix = l.asm.gg).apply(null, arguments)
    }
    ;
    l._webRTCProxyOpen = function() {
        return (l._webRTCProxyOpen = l.asm.hg).apply(null, arguments)
    }
    ;
    l._webRTCProxyMessage = function() {
        return (l._webRTCProxyMessage = l.asm.ig).apply(null, arguments)
    }
    ;
    var kd = l._webRTCProxyClosed = function() {
        return (kd = l._webRTCProxyClosed = l.asm.jg).apply(null, arguments)
    }
      , cd = l._cp6_browser_quit_confirmation = function() {
        return (cd = l._cp6_browser_quit_confirmation = l.asm.kg).apply(null, arguments)
    }
    ;
    l._cp6_location_hash_changed = function() {
        return (l._cp6_location_hash_changed = l.asm.lg).apply(null, arguments)
    }
    ;
    l._emscripten_sleep = function() {
        return (l._emscripten_sleep = l.asm.mg).apply(null, arguments)
    }
    ;
    var fd = l._cp6_mouse_wheel = function() {
        return (fd = l._cp6_mouse_wheel = l.asm.ng).apply(null, arguments)
    }
      , Nb = l._cp6_window_blur = function() {
        return (Nb = l._cp6_window_blur = l.asm.og).apply(null, arguments)
    }
      , mc = l._cp6_image_loaded = function() {
        return (mc = l._cp6_image_loaded = l.asm.pg).apply(null, arguments)
    }
      , Ta = l._cp6_force_jsinterface_flush = function() {
        return (Ta = l._cp6_force_jsinterface_flush = l.asm.qg).apply(null, arguments)
    }
      , Pb = l._le_check = function() {
        return (Pb = l._le_check = l.asm.rg).apply(null, arguments)
    }
    ;
    l._aip_complete = function() {
        return (l._aip_complete = l.asm.sg).apply(null, arguments)
    }
    ;
    var Sa = l._cp6_check_ws = function() {
        return (Sa = l._cp6_check_ws = l.asm.tg).apply(null, arguments)
    }
      , vc = l.stackSave = function() {
        return (vc = l.stackSave = l.asm.vg).apply(null, arguments)
    }
      , wc = l.stackRestore = function() {
        return (wc = l.stackRestore = l.asm.wg).apply(null, arguments)
    }
      , Ca = l.stackAlloc = function() {
        return (Ca = l.stackAlloc = l.asm.xg).apply(null, arguments)
    }
    ;
    l.dynCall_jiji = function() {
        return (l.dynCall_jiji = l.asm.yg).apply(null, arguments)
    }
    ;
    l.dynCall_ji = function() {
        return (l.dynCall_ji = l.asm.zg).apply(null, arguments)
    }
    ;
    l.dynCall_viijii = function() {
        return (l.dynCall_viijii = l.asm.Ag).apply(null, arguments)
    }
    ;
    l.dynCall_iiiiij = function() {
        return (l.dynCall_iiiiij = l.asm.Bg).apply(null, arguments)
    }
    ;
    l.dynCall_iiiiijj = function() {
        return (l.dynCall_iiiiijj = l.asm.Cg).apply(null, arguments)
    }
    ;
    l.dynCall_iiiiiijj = function() {
        return (l.dynCall_iiiiiijj = l.asm.Dg).apply(null, arguments)
    }
    ;
    var jb;
    Ha = function b() {
        jb || Wc();
        jb || (Ha = b)
    }
    ;
    if (l.preInit)
        for ("function" == typeof l.preInit && (l.preInit = [l.preInit]); 0 < l.preInit.length; )
            l.preInit.pop()();
    var Yc = !0;
    l.noInitialRun && (Yc = !1);
    Wc()
}
)();
